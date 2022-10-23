import { useState, useEffect, useMemo, createRef } from "react";
import ReactPlayer from 'react-player/lazy';
import { Card, CardContent, Grid } from '@mui/material';

let VideoWithTranscription = ({video,transcription}) => {
  let [current, setCurrent] = useState(0)

  let player = createRef()

  return <Card sx={{ display: { xs: "none", md: "block" } }}>
        <CardContent>
          <ReactPlayer
            ref={(p)=>player=p} width="100%"
            url="/main-e1.mp4"
            controls={true}
            progressInterval={ 10 }
            onProgress={(p) => { 

              //Simple but super in-efficient, will not work for long transcriptions...
              //TODO: Rework this
              for (let i in transcription.results.items) {
                let item = transcription.results.items[i]
                let end = item.end_time
                let start = item.start_time
                if (p.playedSeconds > start && p.playedSeconds <= end)
                  setCurrent(i)
              }
            }}
            onEnded={() => {  }}
          />
          {transcription.results.items.map((item,i) => {
            let content = item.alternatives[0].content
            return <span
              onClick={() => {
                player.seekTo(item.start_time, "seconds")
                setCurrent(i)
              }}
              style={{
                //Uncomment for a good time.
                //fontSize: (item.end_time - item.start_time)*50,
                cursor: "pointer",
                color: current == i ? "red" : "white"
              }}
              key={i}>{content.match(/^[^\w]$/) ? "" : " "}{content}</span>    
          })} 
        </CardContent>
      </Card>
}

let FancyVideoDemo = (props) => {
  let [debug, setDebug] = useState("")
  let [content, setContent] = useState("...")

  return <Card sx={{ display: { xs: "none", md: "block" } }}>
        <CardContent>
          <ReactPlayer
            width="100%"
            url="/short-videos/testing-one-two-three.mp4"
            controls={true}
            progressInterval={ 10 }
            onProgress={(p) => {
                //setDebug(JSON.stringify(p))
                if (parseFloat(p.playedSeconds) > 2.0) {
                  setContent("Testing... Three") 
                } else if (parseFloat(p.playedSeconds) > 1.6) {
                  setContent("Testing... Two") 
                } else if (parseFloat(p.playedSeconds) > 1.3) {
                  setContent("Testing... One") 
                } else if (parseFloat(p.playedSeconds) > 0.5) {
                  setContent("Testing...") 
                } else if (parseFloat(p.playedSeconds) > 0) {
                  setContent("Test...") 
                }
            }}
            onEnded={() => { setContent("Video ended") }}
          />
          {content} 
        </CardContent>
      </Card>
}

export const text =
    [
`# October 24th - Monday

Following up on my prototype from yesterday, I'm making a video component I can feed Amazon Transcribe JSON output into.  Here's my homepage video with an animated transcription.   It's not particulary efficient yet, but it's a step in the right direction, I think. 
`,
    <VideoWithTranscription
      video="/e-main.mp4"
      transcription={{"jobName":"Test123","accountId":"815546122970","results":{"transcripts":[{"transcript":"Welcome to a very short video about this website, you should know that it is under construction. So most of the tiles underneath this video, you're going to click them and not find a lot of content. But if you want to follow the progress, and if you're curious what is new, then all you have to do is click about right here underneath this video. In the what's new tile, I'll see you there."}],"items":[{"start_time":"0.0","end_time":"0.46","alternatives":[{"confidence":"1.0","content":"Welcome"}],"type":"pronunciation"},{"start_time":"0.46","end_time":"0.64","alternatives":[{"confidence":"1.0","content":"to"}],"type":"pronunciation"},{"start_time":"0.64","end_time":"0.74","alternatives":[{"confidence":"1.0","content":"a"}],"type":"pronunciation"},{"start_time":"0.74","end_time":"1.04","alternatives":[{"confidence":"1.0","content":"very"}],"type":"pronunciation"},{"start_time":"1.04","end_time":"1.3","alternatives":[{"confidence":"0.7912","content":"short"}],"type":"pronunciation"},{"start_time":"1.3","end_time":"1.62","alternatives":[{"confidence":"1.0","content":"video"}],"type":"pronunciation"},{"start_time":"1.62","end_time":"1.97","alternatives":[{"confidence":"1.0","content":"about"}],"type":"pronunciation"},{"start_time":"1.97","end_time":"2.16","alternatives":[{"confidence":"1.0","content":"this"}],"type":"pronunciation"},{"start_time":"2.16","end_time":"2.9","alternatives":[{"confidence":"0.9864","content":"website"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":","}],"type":"punctuation"},{"start_time":"2.91","end_time":"3.4","alternatives":[{"confidence":"1.0","content":"you"}],"type":"pronunciation"},{"start_time":"3.4","end_time":"3.62","alternatives":[{"confidence":"1.0","content":"should"}],"type":"pronunciation"},{"start_time":"3.62","end_time":"4.29","alternatives":[{"confidence":"1.0","content":"know"}],"type":"pronunciation"},{"start_time":"4.3","end_time":"4.7","alternatives":[{"confidence":"1.0","content":"that"}],"type":"pronunciation"},{"start_time":"4.71","end_time":"4.89","alternatives":[{"confidence":"1.0","content":"it"}],"type":"pronunciation"},{"start_time":"4.89","end_time":"5.36","alternatives":[{"confidence":"1.0","content":"is"}],"type":"pronunciation"},{"start_time":"5.37","end_time":"5.82","alternatives":[{"confidence":"1.0","content":"under"}],"type":"pronunciation"},{"start_time":"5.82","end_time":"6.66","alternatives":[{"confidence":"1.0","content":"construction"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":"."}],"type":"punctuation"},{"start_time":"6.67","end_time":"7.4","alternatives":[{"confidence":"1.0","content":"So"}],"type":"pronunciation"},{"start_time":"7.41","end_time":"7.77","alternatives":[{"confidence":"1.0","content":"most"}],"type":"pronunciation"},{"start_time":"7.77","end_time":"7.84","alternatives":[{"confidence":"1.0","content":"of"}],"type":"pronunciation"},{"start_time":"7.84","end_time":"7.94","alternatives":[{"confidence":"1.0","content":"the"}],"type":"pronunciation"},{"start_time":"7.94","end_time":"8.4","alternatives":[{"confidence":"1.0","content":"tiles"}],"type":"pronunciation"},{"start_time":"8.4","end_time":"8.97","alternatives":[{"confidence":"1.0","content":"underneath"}],"type":"pronunciation"},{"start_time":"8.98","end_time":"9.19","alternatives":[{"confidence":"1.0","content":"this"}],"type":"pronunciation"},{"start_time":"9.19","end_time":"9.93","alternatives":[{"confidence":"1.0","content":"video"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":","}],"type":"punctuation"},{"start_time":"9.94","end_time":"10.55","alternatives":[{"confidence":"1.0","content":"you're"}],"type":"pronunciation"},{"start_time":"10.55","end_time":"10.67","alternatives":[{"confidence":"0.7825","content":"going"}],"type":"pronunciation"},{"start_time":"10.67","end_time":"10.73","alternatives":[{"confidence":"0.7825","content":"to"}],"type":"pronunciation"},{"start_time":"10.73","end_time":"11.02","alternatives":[{"confidence":"1.0","content":"click"}],"type":"pronunciation"},{"start_time":"11.02","end_time":"11.31","alternatives":[{"confidence":"1.0","content":"them"}],"type":"pronunciation"},{"start_time":"11.31","end_time":"11.83","alternatives":[{"confidence":"1.0","content":"and"}],"type":"pronunciation"},{"start_time":"11.84","end_time":"12.15","alternatives":[{"confidence":"1.0","content":"not"}],"type":"pronunciation"},{"start_time":"12.15","end_time":"12.43","alternatives":[{"confidence":"0.9963","content":"find"}],"type":"pronunciation"},{"start_time":"12.43","end_time":"12.53","alternatives":[{"confidence":"1.0","content":"a"}],"type":"pronunciation"},{"start_time":"12.53","end_time":"12.75","alternatives":[{"confidence":"1.0","content":"lot"}],"type":"pronunciation"},{"start_time":"12.75","end_time":"12.85","alternatives":[{"confidence":"1.0","content":"of"}],"type":"pronunciation"},{"start_time":"12.85","end_time":"13.66","alternatives":[{"confidence":"1.0","content":"content"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":"."}],"type":"punctuation"},{"start_time":"13.67","end_time":"15.22","alternatives":[{"confidence":"1.0","content":"But"}],"type":"pronunciation"},{"start_time":"15.23","end_time":"15.77","alternatives":[{"confidence":"1.0","content":"if"}],"type":"pronunciation"},{"start_time":"15.77","end_time":"15.88","alternatives":[{"confidence":"1.0","content":"you"}],"type":"pronunciation"},{"start_time":"15.88","end_time":"16.03","alternatives":[{"confidence":"0.9932","content":"want"}],"type":"pronunciation"},{"start_time":"16.03","end_time":"16.09","alternatives":[{"confidence":"0.9936","content":"to"}],"type":"pronunciation"},{"start_time":"16.09","end_time":"16.39","alternatives":[{"confidence":"1.0","content":"follow"}],"type":"pronunciation"},{"start_time":"16.39","end_time":"16.49","alternatives":[{"confidence":"1.0","content":"the"}],"type":"pronunciation"},{"start_time":"16.49","end_time":"17.71","alternatives":[{"confidence":"1.0","content":"progress"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":","}],"type":"punctuation"},{"start_time":"17.72","end_time":"18.63","alternatives":[{"confidence":"1.0","content":"and"}],"type":"pronunciation"},{"start_time":"18.64","end_time":"18.9","alternatives":[{"confidence":"1.0","content":"if"}],"type":"pronunciation"},{"start_time":"18.9","end_time":"19.02","alternatives":[{"confidence":"0.9969","content":"you're"}],"type":"pronunciation"},{"start_time":"19.02","end_time":"19.79","alternatives":[{"confidence":"1.0","content":"curious"}],"type":"pronunciation"},{"start_time":"19.8","end_time":"20.24","alternatives":[{"confidence":"1.0","content":"what"}],"type":"pronunciation"},{"start_time":"20.24","end_time":"20.43","alternatives":[{"confidence":"1.0","content":"is"}],"type":"pronunciation"},{"start_time":"20.43","end_time":"21.24","alternatives":[{"confidence":"0.9803","content":"new"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":","}],"type":"punctuation"},{"start_time":"21.25","end_time":"21.86","alternatives":[{"confidence":"1.0","content":"then"}],"type":"pronunciation"},{"start_time":"21.87","end_time":"22.13","alternatives":[{"confidence":"1.0","content":"all"}],"type":"pronunciation"},{"start_time":"22.13","end_time":"22.21","alternatives":[{"confidence":"1.0","content":"you"}],"type":"pronunciation"},{"start_time":"22.21","end_time":"22.32","alternatives":[{"confidence":"1.0","content":"have"}],"type":"pronunciation"},{"start_time":"22.32","end_time":"22.4","alternatives":[{"confidence":"1.0","content":"to"}],"type":"pronunciation"},{"start_time":"22.4","end_time":"22.52","alternatives":[{"confidence":"1.0","content":"do"}],"type":"pronunciation"},{"start_time":"22.52","end_time":"22.63","alternatives":[{"confidence":"1.0","content":"is"}],"type":"pronunciation"},{"start_time":"22.63","end_time":"22.9","alternatives":[{"confidence":"1.0","content":"click"}],"type":"pronunciation"},{"start_time":"22.91","end_time":"23.47","alternatives":[{"confidence":"1.0","content":"about"}],"type":"pronunciation"},{"start_time":"23.47","end_time":"23.72","alternatives":[{"confidence":"1.0","content":"right"}],"type":"pronunciation"},{"start_time":"23.72","end_time":"24.51","alternatives":[{"confidence":"1.0","content":"here"}],"type":"pronunciation"},{"start_time":"24.52","end_time":"25.34","alternatives":[{"confidence":"1.0","content":"underneath"}],"type":"pronunciation"},{"start_time":"25.34","end_time":"25.53","alternatives":[{"confidence":"1.0","content":"this"}],"type":"pronunciation"},{"start_time":"25.53","end_time":"26.28","alternatives":[{"confidence":"1.0","content":"video"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":"."}],"type":"punctuation"},{"start_time":"26.29","end_time":"26.6","alternatives":[{"confidence":"1.0","content":"In"}],"type":"pronunciation"},{"start_time":"26.6","end_time":"26.84","alternatives":[{"confidence":"1.0","content":"the"}],"type":"pronunciation"},{"start_time":"26.84","end_time":"27.21","alternatives":[{"confidence":"0.9899","content":"what's"}],"type":"pronunciation"},{"start_time":"27.21","end_time":"27.43","alternatives":[{"confidence":"1.0","content":"new"}],"type":"pronunciation"},{"start_time":"27.43","end_time":"28.44","alternatives":[{"confidence":"0.9998","content":"tile"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":","}],"type":"punctuation"},{"start_time":"29.66","end_time":"29.84","alternatives":[{"confidence":"0.9972","content":"I'll"}],"type":"pronunciation"},{"start_time":"29.84","end_time":"29.98","alternatives":[{"confidence":"1.0","content":"see"}],"type":"pronunciation"},{"start_time":"29.98","end_time":"30.07","alternatives":[{"confidence":"1.0","content":"you"}],"type":"pronunciation"},{"start_time":"30.07","end_time":"30.38","alternatives":[{"confidence":"0.9998","content":"there"}],"type":"pronunciation"},{"alternatives":[{"confidence":"0.0","content":"."}],"type":"punctuation"}]},"status":"COMPLETED"}} />,
`# October 23rd - Sunday

Did a short experiment linking video content to React effects...
`,
<FancyVideoDemo />,
    `I want to link my React content to my vlogging content, so this is my first attempt at figure out what my workflows for this kind of content will be.

TODO: Will probably need to feed the audio into something like Amazon Transcribe to generate the timestamps for various words.  It's a bit painstaking to do it by hand...
    `
]
