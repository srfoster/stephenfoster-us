import { WritingIds, WritingLinkCard } from "../../../../../components/WritingLinkCards"
import { FancyReactMarkdown, VideoWithTranscription } from "../../../../../components/index"
import { useEffect, useState} from "react"

const FetchThen = ({ from, then }) => {
  let [data, setData] = useState(undefined)

  useEffect(()=>{
    fetch(from).then((r)=>r.json()).then((r)=>setData(r))
  }, [])

  if (data) {
    return then(data)
  } else {
    return "Fetching data..."
  }
}

export const text =
[
 <FancyReactMarkdown>{`# October 30th, 2022 - Sunday
Piggybacking on my recent work with animated transcriptions, I've decided to take my react components out for a spin by illustrating (with ai-generated art) a small portion of a short story called *It Never Ends Until It Never Ends*.  I made this 3-minute video to start drafting the artwork that will go with the audio.  Next step will be to hide the video and prettify the animated transcription into a nice audio/video experience.  Obviously what follows is a work in progress.  
`}</FancyReactMarkdown>,

    <FetchThen
      from="/short-videos/shortstories/never-ends/e1.json"
      then={(data) => <VideoWithTranscription
          video="https://stephenfoster-us.s3.us-west-1.amazonaws.com/short-videos/shortstories/never-ends/e1.mp4"
          transcription={data} />
      }
    />,

 <FancyReactMarkdown>{`# Older Stuff
  
Once upon a time, I was working on typesetting and releasing a bunch of short fiction I wrote between the years 2003 and 2020.  I haven't gotten that far, but these card links will (hopefully) remind me to continue work on that project when I have the time:

`}</FancyReactMarkdown>,
  <WritingLinkCard writingId={WritingIds.CODING_FOR_BABIES} />,
  <WritingLinkCard writingId={WritingIds.POLITE_BARBARIANS} />,
  <WritingLinkCard writingId={WritingIds.JONNY_VAMPIRE} />,
  ]
