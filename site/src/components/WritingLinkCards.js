import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Paper, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Fade, Typography, Zoom } from '@mui/material';

export const WritingIds = {
  STORYTREE: "storytree",
  MUSIC: "music",
  SC2: "sc2",
}

export const ClickHere = (props) => {
	return <Fade in={true} timeout={1000}><span style={{ textDecoration: "underline" }}>Click</span></Fade>
}

export const WritingLink = (props) => {
	const history = useHistory()
	const [elevation, setElevation] = useState(1)
	const [showContent, setShowContent] = useState(false)

	return <>
		<a style={{ cursor: "pointer" }} onClick={() => {
			history.push("/" + props.slug)
			window.scrollTo(0, 0)
		}}>
			<Card
				onMouseOver={() => { setElevation(2); setShowContent(true) }}
				onMouseLeave={() => { setElevation(1); setShowContent(false) }}
				elevation={elevation}>
				{!props.img ? "" :
					<CardMedia style={{
						"background": "url(" + props.img + ")",
						backgroundSize:
							props.backgroundSize ? props.backgroundSize : "cover",
						backgroundPosition:
							props.backgroundPosition ? props.backgroundPosition : "0% 0%",
						height: 300, opacity: elevation == 1 ? 0.80 : 1
					}}>
						<Fade in={true} timeout={5000}>
							<div>
								<CardContent style={{ color: "white", backgroundColor: "rgba(0,0,0,.75)" }}>
									{props.title}
									{(showContent || props.showContent) ? <div style={{ marginTop: 15 }}>{props.summary}</div> : ""}
								</CardContent>
							</div>
						</Fade>
					</CardMedia>
				}
			</Card>
		</a>
	</>
}


export let WritingLinkCard = (props) => {
    if(props.writingId == WritingIds.STORYTREE)
        return <WritingLink
            title="The Storytree"
            img="tree-with-eyes2.jpg"
            slug="storytree"
            //backgroundPosition="center bottom"
            summary={[<ClickHere />, " if you like science fiction novels about evil trees."]}
        />

    if(props.writingId == WritingIds.MUSIC)
		return <WritingLink
					title="Music"
					img="cubist-violin.jpg"
					slug="music"
					summary={["I'm on a quest to become a better musician.  ", <ClickHere />, " if you're interested in music and the learning thereof."]}
				/>

    if(props.writingId == WritingIds.SC2)
		return <WritingLink
					title="StarCraft II"
					img="sc2.png"
					slug="starcraft-ii"
					summary={["I play and am not very good.  ", <ClickHere />, " to learn more about my quest to master this very difficult game.", <p>(This art piece was done with style-transfer, unlike the others.)</p>]}
				/>

    return "UNKNOWN WRITING: " + props.writingId
}