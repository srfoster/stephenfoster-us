
import { useState } from "react";
import { FancyReactMarkdown, FetchThen, VideoWithTranscription } from "../../../../../components/index"
import { wraps, getParaFromTos, fixWordPunctuation, extractTimings, removePunctuation, wrapAll, addBackParaBreaks, addBackWordPunctuation, textOnly } from "../../../../../libs/transcriptions"
import { part1 } from "../../../../shortstories/never-ends"


export const text =
        [
                <FancyReactMarkdown>{`# November 4th, 2022 - Tuesday

Made a version of \`wrap\` that takes a list of wrappings.  Next step is to automatically generate some of these wrappings from the original text. 

\`\`\`js
wraps([
        { from: "As the sun rose,", to: "not a day later.", element: (props) => <div style={{ color: "orange" }}>{props.children}</div> } ,
        { from: "As the sun rose", to: "quest soon.", element: (props) => <div style={{ color: "red" }}>{props.children}</div> },
        { from: "As the sun rose,", to: "doom for all.", element: (props) => <div style={{ color: "yellow" }}>{props.children}</div> },
        { from: "As the sun rose,", to: "could not foresee.", element: (props) => <div style={{ color: "lime" }}>{props.children}</div> },
        { from: "A few hours", to: "wouldn't do to wait.", element: (props) => <div style={{ color: "cyan" }}>{props.children}</div> },
        { from: "The King's Committee", to: "abandon the invasion.", element: (props) => <p style={{ color: "magenta" }} {...props} /> } ]
        ,
        fixWordPunctuation(part1, data))
\`\`\`

The above renders out like so:

`}</FancyReactMarkdown>,

                <FetchThen
                        from="/short-videos/shortstories/never-ends/e1.json"
                        then={(data) => { 
                                let wrapped =
                                        wraps([
                                               { from: "As the sun rose,", to: "not a day later.", element: (props) => <div style={{ color: "orange" }}>{props.children}</div> } ,
                                                { from: "As the sun rose", to: "quest soon.", element: (props) => <div style={{ color: "red" }}>{props.children}</div> },
                                                { from: "As the sun rose,", to: "doom for all.", element: (props) => <div style={{ color: "yellow" }}>{props.children}</div> },
                                                { from: "As the sun rose,", to: "could not foresee.", element: (props) => <div style={{ color: "lime" }}>{props.children}</div> },
                                                { from: "A few hours", to: "wouldn't do to wait.", element: (props) => <div style={{ color: "cyan" }}>{props.children}</div> },
                                                { from: "The King's Committee", to: "abandon the invasion.", element: (props) => <p style={{ color: "magenta" }} {...props} /> } ]
                                                ,
                                              fixWordPunctuation(part1, data))

                                return <VideoWithTranscription
                                        hideVideo={true}
                                        video="https://stephenfoster-us.s3.us-west-1.amazonaws.com/short-videos/shortstories/never-ends/e1.mp4"
                                        transcription={ wrapped } 
                                       />
                        }} />,

                        /*
                <FetchThen
                        from="/short-videos/shortstories/never-ends/e1.json"
                        then={(data) => { 
                                let paras =
                                        wraps(getParaFromTos(part1),
                                              fixWordPunctuation(part1, data))

                                return <VideoWithTranscription
                                        hideVideo={true}
                                        video="https://stephenfoster-us.s3.us-west-1.amazonaws.com/short-videos/shortstories/never-ends/e1.mp4"
                                        transcription={ paras } 
                                       />
                        }} />,
                        */
  ]
