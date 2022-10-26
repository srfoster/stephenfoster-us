
import { useState, useEffect, useMemo, createRef } from "react";
import { Card, CardContent, Grid, Button } from '@mui/material';
import { Fade } from '@mui/material';
import ReactPlayer from 'react-player/lazy';

export let basicStyle = ({activeColor, inactiveColor}) => {
	return (currentlyPlayingIndex, myIndex) => {
		return {
			//Uncomment for a good time.
			//fontSize: (item.end_time - item.start_time)*50,
      cursor: "pointer",
			color: currentlyPlayingIndex == myIndex ? activeColor : inactiveColor
		}
	}
}

export let revealWords = () => {
	return (currentlyPlayingIndex, myIndex) => {
		return {
      cursor: "pointer",
			opacity: currentlyPlayingIndex < myIndex ? 0.1 : 1,
			//display: currentlyPlayingIndex < myIndex ? "none" : "inline",
		}
	}
}

export let ContentWrapper = ({children, active}) => {
   //Fade Not working 
   //return <Fade in={true}>Hi </Fade>

   //Idea for additional content transformations...
   //return <>{active ? "[" : ""}{children}{active ? "]" : ""}</>

   return <>{children}</>
}

export let TranscriptionWord = ({item, seekTo, current, setCurrent, myIndex, styleFunction}) => { 
  let content = item.alternatives[0].content
	return <span
						onClick={() => {
							  seekTo(item.start_time)
								setCurrent(myIndex)
						}}
					  style={styleFunction(current,myIndex)}
					  key={myIndex}>
             {(content.match && content.match(/^[^\w]$/)) ? "" : " "}
             <ContentWrapper active={current == myIndex}>{!content.highlighted ? content : (current == myIndex ? content.highlighted : content.normal)}</ContentWrapper>
   </span>    
} 

export let VideoWithTranscription = ({video,transcription, hideVideo}) => {
  let [current, setCurrent] = useState(0)
  let [playing, setPlaying] = useState(false)

  let player = createRef()

  return <Card> 
        <CardContent>
      {hideVideo && <Button onClick={() => { setPlaying((p)=>!p) }}>{playing ? "Stop" : "Play"}</Button>}
      
      <ReactPlayer
        playing={ playing}
        ref={(p) => {
          player = p;
          if(hideVideo && p) p.wrapper.style.display = "none"
        }} 
        width="100%"
        url={video}
        controls={true}
        progressInterval={10}
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
        onEnded={() => { }}
      />
          {transcription.results.items.map((item,i) => {
            return <TranscriptionWord 
                     item={item} 
                     seekTo={(time)=>{
                       player.seekTo(time, "seconds")
                     }} 
                     current={current}
                     setCurrent={setCurrent}
                     myIndex={i}
                     styleFunction={revealWords()}
										 />
          })} 
        </CardContent>
      </Card>
}

