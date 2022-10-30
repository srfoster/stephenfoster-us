import { FancyReactMarkdown, Score } from "../../../../../components/index"
import { WritingIds, WritingLinkCard } from "../../../../../components/WritingLinkCards"

import { VideoWithTranscription, testTranscription } from "../../../../../components/VideoWithTranscription"

export const text =
[
 <FancyReactMarkdown>{`# October 29th, 2022 - Saturday 
   
Finally got around to doing a blog post about my recent adventures in animated transcriptions.  
`}</FancyReactMarkdown>,
  <WritingLinkCard writingId={WritingIds.CODING} />,
 <FancyReactMarkdown>{`For a quick demo, press Play:`}</FancyReactMarkdown>,
        <VideoWithTranscription
            hideVideo={true}
            video={ testTranscription.file}
            transcription={testTranscription.json} />
  ]
