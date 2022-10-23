import { useState} from "react";
import { Button} from '@mui/material';

import SheetMusic from "@slnsw/react-sheet-music";
import uniqid from "uniqid";
import * as Tone from "tone";


//Inspired by: https://codesandbox.io/s/markdown-abcjs-forked-2dbtly?file=/src/App.js:350-412
export default function Score({ notation, id }) {
	const [isPlaying, setIsPlaying] = useState(false);

	const synth = new Tone.PolySynth(Tone.Synth).toDestination();


	function onEvent(event) {
		if (!event) {
			setIsPlaying(false)
			return;
		}
		event.notes.forEach((n) => {
			console.log("Note:",n)
			synth.triggerAttackRelease(n.name, n.duration);
		});
	}

	function play() {
		/*if (isPlaying) { //Why??? SF
			document.getElementById();
		}*/
		setIsPlaying((isPlaying) => !isPlaying);
	}

	return (
		<>
			<div style={{
				backgroundColor: "white"
			}}>
				<SheetMusic
					notation={notation}
					id={id}
					isPlaying={isPlaying}
					onEvent={onEvent}
					bpm={70}
				/>
			</div>
			{<Button onClick={play}>Play</Button>}
		</>
	);
}