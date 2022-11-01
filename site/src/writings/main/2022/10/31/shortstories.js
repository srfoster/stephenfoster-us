import { WritingIds, WritingLinkCard } from "../../../../../components/WritingLinkCards"
import { FancyReactMarkdown, VideoWithTranscription, FetchThen } from "../../../../../components/index"

function removePunctuation(transcriptionData) {
  let itemsWithoutPunctuations =  transcriptionData.results.items.filter((i)=>i.type != "punctuation")

  let copy = {...transcriptionData}

  copy.results.items = itemsWithoutPunctuations

  return copy
}

function itemContentsArray(transcriptionData) {
  return transcriptionData.results.items.map((i)=>i.alternatives[0].content)
}

function pairWithOriginal(originalText, transcriptionData) {
  let a = originalText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g,"").replace(/\s{2,}/g," ").split(" ")
  let b = itemContentsArray(transcriptionData)

  let pairs = []

  for (let i = 0; i < a.length; i++){
    pairs.push([a[i], b[i]])  
  }

  return pairs
}

function validatePairs(pairs) {
  for (let i = 0; i < pairs.length; i++){
    if (pairs[i][0].toLowerCase() != pairs[i][1].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g,"")) {
      throw("Problem at word " + i + ". " + pairs[i] + " (" + pairs[i-1][0] + " " + pairs[i][0] + " " + pairs[i+1][0] + ")")
    }
  }
}

function fixTranscription( originalText, transcriptionData) {
  let noPunctuation = removePunctuation(transcriptionData)
  let noPunctuationWithPairs = pairWithOriginal(originalText, noPunctuation) 

  validatePairs(noPunctuationWithPairs)

  return noPunctuation //transcriptionData 
}

let originalText = 
`As the sun rose that day, the child looked up at the oncoming darkness and knew the truth.  A hero would need to go on a quest soon.

***
As the sun rose, the farmer looked up at the oncoming darkness above his fields and knew the truth.  A hero 
would need to go on a quest.  Today.  And not a day later. 

***

As the sun rose, a wizard looked through his tower at the oncoming darkness and knew the truth.  A hero 
would need to go on a quest.  And if they failed, it would mean doom for all.

***

As the sun rose, the prophet in her lonesome cave in the tallest mountain faced the cold winds from the 
oncoming darkness and knew the truth she had always known.  Someone would need to go on a quest.  
And whether they would succeed, she could not foresee.

***

A few hours after sunrise, the King rose to the sounds of calamity and ran to his window.  When he saw the oncoming 
darkness and the protesters with their signs, he knew the truth.  He would need to find someone to go on a quest.  And it wouldn't do to wait.

***

The King's Committee of Heroes met, and the decision was made to send a rider to the Master Hero.  He had retired far away, near the mountains, in a quiet village.  He had gone on more quests in his miraculously long lifetime than anyone else in the kingdom.  He had killed that dragon that one time, back in King Ben's era.  And when King Sal's daughter was sick, he had found that medicine.  Back when the Burned Ones invaded on those weird shrieking, featherless birds, he had led that counter offensive behind enemy lines, assassinating the Burned Ones' so-called "Queen of the Harlots", causing serious political unrest that required the Burned Ones to attend to internal affairs and abandon the invasion.  

And that was saying nothing of the quests upon which he had consulted.  Yes, some of his most successful quests had been ones he hadn't personally taken.  His hero consulting business had exploded after he was given the title of Master Hero by Queen Amy, who had made up the title just for him after he dealt with that infestation in a quiet and discreet manner.  

His long history as a hero had left him with many powerful artifacts.  One of them, the enchanted Book of Quests, was said to describe a sort of abstract structure in quests -- a set of patterns that seemed to repeat from quest to quest.  It was also said to contain the details of any quest that ever was or could be.

For many years, he had used the book to run a school whose curriculum had been specially designed to raise young heroes.  Though it had downsized considerably during the economic depression that followed Queen Amy's son's inauguration, there was no historian in the kingdom who denied that the school had resulted in more than 700 successful epic quest completions, and over 1000 working heroes.  Many of those heroes had even survived their quests and gone on to teach at the school the very same curriculum that had been taught to them by the Master Hero.  

Many of these teachers were, in fact, on the King's Committee of Heroes.  As they debated in hushed tones, they took nervous glances out the window at the oncoming darkness.  

***

By meeting's end, everyone agreed that this darkness looming over the kingdom was like nothing they had ever faced.  Although the Master was in retirement, there was really no other option.  It would have to be him.  

The committee wrote all of this down and gave a message to their fastest rider, who left immediately upon his red horse.`

export const text =
[
 <FancyReactMarkdown>{`# October 31st, 2022 - Monday

Yesterday's blog post revealed what everyone already knows: Automated transcription makes a lot of mistakes.
I *could* fix it all by hand, but why?  I have the original text.  Shouldn't I be able to fix it automatically
(or at least semi-automatically)?

Here are a few problems, I've already seen: 

* Words in the transcription that aren't in the original text (for example, if I add an "And" at the beginning of a sentence)
* Words in the original text that aren't in the transcription (for example, if I drop an "And" at the beginning of a sentence)
* Words that are mispelled (for example, if I say "He rose at dawn" instead of "He woke at dawn", or if the transcription spells something differently from how I spelled it -- "protesters" vs "protestors" )

I'm wrote some code today to detect stuff like this -- but it still took me over an hour to clean up all the discrepencies.  (TODO: Find a way to make transcriptions more accurate?  Maybe I can upload the original into Amazon trascribe next time.) 

In any event, now that I have a transcript and a text that matches up, it's time to tackle the harder problem: Bad Punctuation.

To be continued.`}</FancyReactMarkdown>,

/*
    <FetchThen
      from="/short-videos/shortstories/never-ends/e1.json"
      then={(data) =>
        <VideoWithTranscription
          showVideo={false}
          video="https://stephenfoster-us.s3.us-west-1.amazonaws.com/short-videos/shortstories/never-ends/e1.mp4"
          transcription={
            fixTranscription(
              originalText, data

            )
          } />
      }
    />,
    */
  ]
