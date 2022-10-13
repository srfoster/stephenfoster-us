import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { FancyReactMarkdown } from "../../../../../components/index"
import useWindowSize from 'react-use/lib/useWindowSize'
import ReactPlayer from 'react-player/lazy';
import { Button } from '@mui/material';


let VideoDemo = (props) => { 
  const [videoEnded, setVideoEnded] = useState(false)
  const { width, height } = useWindowSize()

  return <>
    <ReactPlayer
      url="react-player-demo.mp4"
      controls={true}
      onStart={() => { setVideoEnded(false) }}
      onEnded={() => { setVideoEnded(true) }}
    /> 
    {videoEnded ? <>
      <Button onClick={() => { setVideoEnded(false)}}>It happened!  (Click to undo)</Button>
    </> : ""}
  </>
}



export const text =
[<FancyReactMarkdown>{`
# October 10th, 2022 - Monday 

I created my new homepage video today.  

I want to make a big shout out to the makers of the \`react-player\` library.  Very nice!  Quick demo:

\`\`\`js
import ReactPlayer from 'react-player/lazy';

let CoolThing = (props) =>
  <ReactPlayer 
    url="whatever" 
    onEnded={()=>{
      //Set your react state here...
    }}
  />
\`\`\`

You can easily display, for example, a button that shows up only after the video is complete:
`}</FancyReactMarkdown>,

<VideoDemo />]