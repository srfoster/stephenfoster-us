
import { useState, useEffect, useMemo, createRef } from "react";
import { Card, CardContent, Grid } from '@mui/material';
import ReactPlayer from 'react-player/lazy';

let VideoWithTranscription = ({video,transcription}) => {
  let [current, setCurrent] = useState(0)

  let player = createRef()

  return <Card sx={{ display: { xs: "none", md: "block" } }}>
        <CardContent>
          <ReactPlayer
            ref={(p)=>player=p} width="100%"
            url={video}
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
              key={i}>{(content.match && content.match(/^[^\w]$/)) ? "" : " "}{!content.highlighted ? content : (current == i ? content.highlighted : content.normal)}</span>    
          })} 
        </CardContent>
      </Card>
}

export default VideoWithTranscription 