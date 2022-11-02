
import { FancyReactMarkdown, FetchThen, VideoWithTranscription } from "../../../../../components/index"
import { extractTimings, removePunctuation, wrapAll, addBackParaBreaks, addBackWordPunctuation, textOnly } from "../../../../../libs/transcriptions"
import { part1 } from "../../../../shortstories/never-ends"


export const text =
        [
                <FancyReactMarkdown>{`# November 2nd, 2022 - Tuesday

`}</FancyReactMarkdown>,

                <FetchThen
                        from="/short-videos/shortstories/never-ends/e1.json"
                        then={(data) => { 
                                let ret = <FancyReactMarkdown>{part1}</FancyReactMarkdown>
                                let ret2 = <VideoWithTranscription
                                        hideVideo={true}
                                        video="https://stephenfoster-us.s3.us-west-1.amazonaws.com/short-videos/shortstories/never-ends/e1.mp4"
//                                        transcription={ data }
                                        transcription={ extractTimings(data)
                                                /*
                                                wrapAll(removePunctuation(data),
                                                        (i) => {
                                                           return "[" + i + "]"
                                                        })
                                                        */
                                        } 
                                          //transcription={addBackParaBreaks(part1, addBackWordPunctuation(part1, data))} 

                                              />

                                return [ret2, ret]
                        }} />,
                        /*
    <FetchThen
      from="/short-videos/shortstories/never-ends/e1.json"
      then={(data) => { 
        console.log(addBackParaBreaks(part1, addBackWordPunctuation(part1, data)))
              return <FancyReactMarkdown>{textOnly(addBackParaBreaks(part1, addBackWordPunctuation(part1, data)))}
              </FancyReactMarkdown>
      }} />
     */
  ]
