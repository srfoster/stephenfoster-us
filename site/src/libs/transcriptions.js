
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

export function removePunctuation(transcriptionData) {
  let itemsWithoutPunctuations =  transcriptionData.results.items.filter((i)=>i.type != "punctuation")

  let copy = {...transcriptionData}

  copy.results.items = itemsWithoutPunctuations

  return copy
}

export function wrapAll(transcriptionData, wrapper) {
  let items =  transcriptionData.results.items

  let copy = {...transcriptionData}

  for(let item of copy.results.items){
    let content = item.alternatives[0].content
    item.alternatives[0].content = wrapper(content)
  }

  return copy
}

//Only works after the words match up (validatePairs needs to have been called)
export function addBackWordPunctuation(originalText, transcriptionData) {
  let originalWords = originalText.replace(/[\*]/g,"").replace(/\s{2,}/g," ").split(" ")
  let itemsWithFixedPunctuation =  transcriptionData.results.items.map((i,index)=>{
    i.alternatives[0].content = originalWords[index]
    return i
  })

  let copy = {...transcriptionData}

  copy.results.items = itemsWithFixedPunctuation

  return copy
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