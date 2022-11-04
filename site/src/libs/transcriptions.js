
//Mostly, we want to deal with Array<Timing> data structures

//Timings are like {content: "foo", type: TimingType, start_time: Time, end_time: time}
//TimingTypes are "pronunciation", "punctuation", and "container"
//Timings with type "container" will also have an element: and a children: field

//AWS transcription -> Array<Timing>
export function extractTimings(transcriptionData) {
  let items = transcriptionData.results ? transcriptionData.results.items : transcriptionData

  for (let i of items) {
    if (i.alternatives) {
      i.content = i.alternatives[0].content
      delete i.alternatives
    }

    if (i.children) {
      i.children = extractTimings(i.children)
    }
  }

  return items
}

//Not exactly efficient, but lets us assume that our functions are pure, which is nice
//Array<Timing> -> Array<Timing>
function deepCopy(timings) {
  return [...timings].map((t) => {
    return {...t}
  })
}

export function removePunctuation(timings) {
  let copy = deepCopy(timings)

  return copy.filter((t)=>t.type != "punctuation")
}

export function wrapAll(timings, wrapper) {
  let copy = deepCopy(timings)

  for(let item of copy){
    let content = item.content
    item.content = wrapper(content)
  }

  return copy
}

//Only works after the words match up (validatePairs needs to have been called)
export function addBackWordPunctuation(originalText, timings) {
  let originalWords = originalText.replace(/[\*]/g,"").replace(" -- ", " ").replace(/\s{2,}/g," ").split(" ")

  let dc = deepCopy(timings)

  let timingsWithFixedPunctuation =  deepCopy(timings).map((i,index)=>{
    console.log("orig word:",i.content, originalWords[index])
    i.content = originalWords[index]
    return i
  })

  return timingsWithFixedPunctuation 
}

export function fixWordPunctuation(originalText, timings) {
  return addBackWordPunctuation(originalText, removePunctuation(extractTimings(timings))) 
}

function findIndex(words, timings, end) {
  let index = 0
  let wordsFound = 0
  let wordsArray = words.split(" ")

  for (let t of timings) {
    if (t.content == wordsArray[wordsFound]) {
      wordsFound++
      
      if (wordsFound == wordsArray.length)
        return end ? (index + 1) : (index - wordsFound + 1)
    } else {
      wordsFound = 0
    }
    index++
  }

  console.log(timings)

  throw("Anchor not found: " + words)
}

function findEndIndex(words, timings) {
  return findIndex(words, timings, true)
}

function findStartIndex(words, timings) {
  return findIndex(words, timings, false)
}

export function wraps(fromTos, timings) {
  if (fromTos.length == 0) return timings
  
  return wraps(fromTos.slice(1), wrap(fromTos[0], timings))
}

export function wrap(fromTo, timings) {
  timings = deepCopy(timings) 

  console.log("Last",timings[timings.length - 1])

  let from = findStartIndex(fromTo.from, timings)
  let to   = findEndIndex(fromTo.to, timings)

  let container = {type:"container", element: fromTo.element, children: timings.slice(from, to) }
  
  timings = timings.slice(0,from).concat([container]).concat(timings.slice(to))

  return timings
}

export function getParaFromTos(originalText) {
  function firstWords(n, p) {
    return p.split(" ").slice(0, n).join(" ")
  }

  function lastWords(n, p) {
    let a = p.split(" ")
      
    return a.slice(a.length - n - 1).join(" ")
  }

  return originalText.replace(/\n\n\*\*\*\n\n/g, "\n\n").split("\n\n").map((p) => {
    return {
      from: firstWords(3, p),
      to: lastWords(3, p),
      element: (props) => <p {...props} />
    }
  })
}

export function indexesOf(string, regex) {
    let a = string.split(regex)

    return a.map((part)=>{return {chars: part.length, words: part.split(" ").length}})
}


export function itemContentsArray(transcriptionData) {
  return transcriptionData.results.items.map((i)=>i.alternatives[0].content)
}

export function textOnly(transcriptionData) {
  return itemContentsArray(transcriptionData).join(" ")
}

export function pairWithOriginal(originalText, transcriptionData) {
  let a = originalText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g,"").replace(/\s{2,}/g," ").split(" ")
  let b = itemContentsArray(transcriptionData)

  let pairs = []

  for (let i = 0; i < a.length; i++){
    pairs.push([a[i], b[i]])  
  }

  return pairs
}

export function validatePairs(pairs) {
  for (let i = 0; i < pairs.length; i++){
    if (pairs[i][0].toLowerCase() != pairs[i][1].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g,"")) {
      throw("Problem at word " + i + ". " + pairs[i] + " (" + pairs[i-1][0] + " " + pairs[i][0] + " " + pairs[i+1][0] + ")")
    }
  }
}

export function fixTranscription( originalText, transcriptionData) {
  let noPunctuation = removePunctuation(transcriptionData)
  let noPunctuationWithPairs = pairWithOriginal(originalText, noPunctuation) 

  //Throws errors until everything is fixed
  validatePairs(noPunctuationWithPairs)

  return noPunctuation //transcriptionData 
}
