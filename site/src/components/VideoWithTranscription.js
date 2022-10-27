
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

  let i = 0
  let itemToTranscriptionWord = (item) => {
            if(item.type == "container"){
              return {type: "container", 
                      element: item.element, 
                      children: item.children.map(itemToTranscriptionWord) }
            } else {
          
              let transcriptionWord = <TranscriptionWord 
                     item={item} 
                     seekTo={(time)=>{
                       player.seekTo(time, "seconds")
                     }} 
                     current={current}
                     setCurrent={setCurrent}
                     myIndex={i}
                     styleFunction={revealWords()}
										 />
              i++

              return transcriptionWord
            }
          }

  let combine = (item) => {
		if(item.type == "container"){
			let El = item.element
      return <El children={item.children.map(combine)}/> 
		} else {
      return item 
    }
  }


  let items = transcription.results.items.map(itemToTranscriptionWord)
  let combinedItems = items.map(combine)

  let flattenedItems = []
  let flatten = (item)=>{
		if(item.type == "container"){
      item.children.map(flatten)
		} else {
      flattenedItems.push(item)
    }
  }

  transcription.results.items.map(flatten)

  console.log(flattenedItems)

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
          for (let i in flattenedItems) {
            let item = flattenedItems[i]
            if(item.type != "pronunciation") continue;

            let end = item.end_time
            let start = item.start_time
            if (p.playedSeconds > start && p.playedSeconds <= end)
              setCurrent(i)
          }
        }}
        onEnded={() => { }}
      />
          {combinedItems} 
        </CardContent>
      </Card>
}

