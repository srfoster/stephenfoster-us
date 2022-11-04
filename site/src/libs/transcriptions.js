
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
function addBackWordPunctuation(originalText, timings) {
  let originalWords = originalText.replace(/[\*]/g,"").replace(/\s{2,}/g," ").split(" ")

  let timingsWithFixedPunctuation =  deepCopy(timings).map((i,index)=>{
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

  let from = findStartIndex(fromTo.from, timings)
  let to   = findEndIndex(fromTo.to, timings)

  let container = {type:"container", element: fromTo.element, children: timings.slice(from, to) }
  
  timings = timings.slice(0,from).concat([container]).concat(timings.slice(to))

  return timings
}

export function addBackParaBreaks(originalText, transcriptionData) {
  let copy = {...transcriptionData}
  let originalWords = originalText.replace(/[\*]/g,"").replace(/\s{2,}/g," ").split(" ")

  let regex = new RegExp(/\n\n/)
  let indexes = indexesOf(originalText,regex)
  let accum = 0 

  for(let index of indexes){
		copy.results.items.splice(index.words + accum - 1, 0, {type: "punctuation", alternatives: [{content: "\n\n"}]})
 
    accum += index.words
  } 

  return copy
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

/*
function test() {
  let orig = [
    { "start_time": "0.19", "end_time": "0.45", "type": "pronunciation", "content": "As" }, { "start_time": "0.45", "end_time": "0.55", "type": "pronunciation", "content": "the" }, { "start_time": "0.55", "end_time": "0.9", "type": "pronunciation", "content": "sun" },
    { "start_time": "0.9", "end_time": "1.31", "type": "pronunciation", "content": "rose" }, { "start_time": "1.31", "end_time": "1.52", "type": "pronunciation", "content": "that" }, { "start_time": "1.53", "end_time": "2.09", "type": "pronunciation", "content": "day," },
    , { "start_time": "2.1", "end_time": "2.24", "type": "pronunciation", "content": "the" }, { "start_time": "2.24", "end_time": "2.7", "type": "pronunciation", "content": "child" }, { "start_time": "2.7", "end_time": "2.94", "type": "pronunciation", "content": "looked" }, { "start_time": "2.94", "end_time": "3.12", "type": "pronunciation", "content": "up" }]

  //wrap({from: "As", ""})

  let result = [
    { type: "container", element: (props) => <div style={{ color: "red" }}>{props.children}</div>, children: [{ "start_time": "0.19", "end_time": "0.45", "type": "pronunciation", "content": "As" }, { "start_time": "0.45", "end_time": "0.55", "type": "pronunciation", "content": "the" }, { "start_time": "0.55", "end_time": "0.9", "type": "pronunciation", "content": "sun" }] },
    { type: "container", element: (props) => <div style={{ color: "orange" }}>{props.children}</div>, children: [{ "start_time": "0.9", "end_time": "1.31", "type": "pronunciation", "content": "rose" }, { "start_time": "1.31", "end_time": "1.52", "type": "pronunciation", "content": "that" }, { "start_time": "1.53", "end_time": "2.09", "type": "pronunciation", "content": "day," }] }
    , { "start_time": "2.1", "end_time": "2.24", "type": "pronunciation", "content": "the" }, { "start_time": "2.24", "end_time": "2.7", "type": "pronunciation", "content": "child" }, { "start_time": "2.7", "end_time": "2.94", "type": "pronunciation", "content": "looked" }, { "start_time": "2.94", "end_time": "3.12", "type": "pronunciation", "content": "up" }]

}
*/