
import { useState } from "react";
import { FancyReactMarkdown, FetchThen, VideoWithTranscription } from "../../../../../components/index"
import { insert, wrap, wraps, getParaFromTos, fixWordPunctuation, extractTimings, removePunctuation, wrapAll, addBackParaBreaks, addBackWordPunctuation, textOnly } from "../../../../../libs/transcriptions"
import { part1 } from "../../../../shortstories/never-ends"


export const text =
        [
                <FancyReactMarkdown>{`# November 9th, 2022 - Wednesday

Inserts work too...  But inserts plus wraps behave weirdly...

`}</FancyReactMarkdown>,

                <FetchThen
                        from="/short-videos/shortstories/never-ends/e1.json"
                        then={(data) => { 
                                let inserted = insert({from: "on a quest soon.", to: "As the sun rose,", element: (props)=>[<br/>,<br/>]},
                                                      fixWordPunctuation(part1, data))

                                let wrapped =
																		wrap({from: "As the sun rose that day,", to: "on a quest soon.", element: (props)=><div style={{color: "red"}}>{props.children}</div>},
																				inserted)

																console.log(inserted.map((i)=>i.content))
																console.log(wrapped.map((w)=>w.content))

                                return <VideoWithTranscription
                                        hideVideo={true}
                                        video="https://stephenfoster-us.s3.us-west-1.amazonaws.com/short-videos/shortstories/never-ends/e1.mp4"
                                        transcription={ wrapped } 
                                       />
                        }} />,

  ]
