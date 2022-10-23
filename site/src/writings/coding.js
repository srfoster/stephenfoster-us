import { useState, useEffect, useMemo } from "react";
import ReactPlayer from 'react-player/lazy';
import { Card, CardContent, Grid } from '@mui/material';

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
`# October 23rd - Sunday

Did a short experiment linking video content to React effects...
`,
<FancyVideoDemo />,
    `I want to link my React content to my vlogging content, so this is my first attempt at figure out what my workflows for this kind of content will be.

TODO: Will probably need to feed the audio into something like Amazon's ___ to generate the timestamps for various words.  It's a bit painstaking to do it by hand...
    `
]
