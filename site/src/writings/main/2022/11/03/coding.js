
import { useState } from "react";
import { FancyReactMarkdown, FetchThen, VideoWithTranscription } from "../../../../../components/index"
import { wrap, fixWordPunctuation, extractTimings, removePunctuation, wrapAll, addBackParaBreaks, addBackWordPunctuation, textOnly } from "../../../../../libs/transcriptions"
import { part1 } from "../../../../shortstories/never-ends"


export const text =
        [
                <FancyReactMarkdown>{`# November 3rd, 2022 - Tuesday

Made some utility functions to help me designate the parts of a transcription that should be wrapped in some component, as well as some functions for fixing up Amazon's bogus punctuation (based on the original text).

\`\`\`js
<FetchThen
  from="/short-videos/shortstories/never-ends/e1.json"
  then={(data) =>  
    wrap({ from: "As the sun rose", 
           to: "quest soon.", 
           element: (props) => <div style={{ color: "red" }}>{props.children}</div> }, 
         fixWordPunctuation(part1, data)) }} />
\`\`\`

If you want to call \`wrap\` twice (see output below), it gets a bit messy, though.  So I'll try to fix that tomorrow.  

All in all, I'm close to being able to embed ai-generated art as illustrations...  To be continued.

`}</FancyReactMarkdown>,

                <FetchThen
                        from="/short-videos/shortstories/never-ends/e1.json"
                        then={(data) => { 
                                let doubleWrap =
                                        wrap({ from: "As the sun rose,", to: "not a day later.", element: (props) => { return <div style={{ color: "orange" }}>{props.children}</div> } },
                                                wrap({ from: "As the sun rose", to: "quest soon.", element: (props) => { return <div style={{ color: "red" }}>{props.children}</div> } },
                                                fixWordPunctuation(part1, data)))

                                console.log("doubleWrap", doubleWrap[0])

                                let ret2 = <VideoWithTranscription
                                        hideVideo={true}
                                        video="https://stephenfoster-us.s3.us-west-1.amazonaws.com/short-videos/shortstories/never-ends/e1.mp4"
                                        transcription={ doubleWrap } 
                                              />

                                return ret2
                        }} />,
  ]
