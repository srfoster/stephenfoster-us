import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Paper, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Fade, Typography, Zoom } from '@mui/material';

export const WritingIds = {
  //Larger categories
  WHATS_NEW: "whats-new",
  STORYTREE: "storytree",
  MUSIC: "music",
  SC2: "sc2",
  DONT_TEACH_CODING: "dont-teach-coding",
  TEACHING: "teaching",
  THOUGHTSTEM: "thoughtstem",
  MINECRAFT: "minecraft",
  CODING: "coding",
  GAMBIT_QUEEN: "gambit_queen",
  CODESPELLS: "codespells",
  DEAR_HUMAN: "dear_human",
  DOLLYS_DRAGON: "dollys-dragon",
  OVER_THE_HILLS: "over-the-hills",
  NIGHTMARE: "nightmare",
  SPIRITSTONE: "spiritstone",
  SCIENCE: "science",
  SHORT_STORIES: "short_stories",
  UNFINISHED_NOVELS: "unfinished_novels",
  VISUAL_ARTS: "visual_arts",
  PHILOSOPHY: "philosophy",


  //Smaller one-ffs
  CODING_FOR_BABIES: "coding-for-babies",
  POLITE_BARBARIANS: "polite-barbarians",
  JONNY_VAMPIRE: "jonny-vampire",
}

export const OfficialCoverArts = {
  [WritingIds.WHATS_NEW]: "hacker.png",

  [WritingIds.STORYTREE]: "tree-with-eyes2.jpg",
  [WritingIds.MUSIC]: "cubist-violin.jpg",
  [WritingIds.SC2]: "protoss.jpg",
  [WritingIds.DONT_TEACH_CODING]: "sci-fi-tablet.jpg",
  [WritingIds.TEACHING]: "socrates-kinkade.jpg",
  [WritingIds.THOUGHTSTEM]: "circuit-board.jpg",
  [WritingIds.MINECRAFT]: "minecraft.jpg",
  [WritingIds.CODING]: "gandalf-with-computer.jpg",
  [WritingIds.GAMBIT_QUEEN]: "girl-secret-agent-chess.jpg",
  [WritingIds.CODESPELLS]: "codespells.jpg",

  [WritingIds.DEAR_HUMAN]: "desert-demon.jpg",
  [WritingIds.DOLLYS_DRAGON]: "egg.png",
  [WritingIds.OVER_THE_HILLS]: "demon-on-tower.jpg",
  [WritingIds.NIGHTMARE]: "nightmare-world.jpg",
  [WritingIds.SPIRITSTONE]: "skyship.jpg",
  [WritingIds.SCIENCE]: "alchemy.jpg",
  [WritingIds.SHORT_STORIES]: "wizard-books.jpg",
  [WritingIds.UNFINISHED_NOVELS]: "ancient-books.jpg",
  [WritingIds.VISUAL_ARTS]: "weird-woman.jpg",
  [WritingIds.PHILOSOPHY]: "black-and-green-typewriter.jpg",


  //Smaller one-ffs
  [WritingIds.CODING_FOR_BABIES]: "baby.png",
  [WritingIds.POLITE_BARBARIANS]: "troy.png",
  [WritingIds.JONNY_VAMPIRE]: "vampire3.jpg",
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
			        img={ OfficialCoverArts[WritingIds.STORYTREE] }
            slug="storytree"
            //backgroundPosition="center bottom"
            summary={[<ClickHere />, " if you like science fiction novels about evil trees."]}
        />

    if(props.writingId == WritingIds.MUSIC)
		return <WritingLink
					title="Music"
			        img={ OfficialCoverArts[WritingIds.MUSIC] }
					slug="music"
					summary={["I'm on a quest to become a better musician.  ", <ClickHere />, " if you're interested in music and the learning thereof."]}
				/>

    if(props.writingId == WritingIds.SC2)
		return <WritingLink
					title="StarCraft II"
			        img={ OfficialCoverArts[WritingIds.SC2] }
					slug="starcraft-ii"
					summary={["I play and am not very good.  ", <ClickHere />, " to learn more about my quest to master this very difficult game."]}
				/>

    if(props.writingId == WritingIds.CODING_FOR_BABIES)
	    return <WritingLink
					title="Coding for Babies"
			        img={ OfficialCoverArts[WritingIds.CODING_FOR_BABIES] }
					backgroundPosition="center center"
					slug="coding-for-babies"
					summary={["A satire on coding education. ", <ClickHere />, " if you're a programming language nerd, and/or if you're interested in computer science education."]}
				/>

    if(props.writingId == WritingIds.POLITE_BARBARIANS)
		return <WritingLink
					title="The Polite Barbarians"
			        img={ OfficialCoverArts[WritingIds.POLITE_BARBARIANS] }
					slug="the-polite-barbarians"
					summary={["A silly short story about Trojan horses that I wrote for no particular reason. ", <ClickHere />, " if you like silly fiction that isn't too long (about a 5 minute read)."]}
				/>

    if(props.writingId == WritingIds.JONNY_VAMPIRE)
		return <WritingLink
					title="Jonny Vampire"
			        img={ OfficialCoverArts[WritingIds.JONNY_VAMPIRE] }
					slug="jonny-vampire"
					summary={["A short story I wrote when I was 18."]}
				/>


    if(props.writingId == WritingIds.DONT_TEACH_CODING)
		return <WritingLink
					title="Don't Teach Coding"
			        img={ OfficialCoverArts[WritingIds.DONT_TEACH_CODING] }
					slug="dont-teach-coding"
					summary={["I wrote a book about teaching and learning coding. ", <ClickHere />, " to learn more, or to buy it."]}
				/>

    if(props.writingId == WritingIds.TEACHING)
		return <WritingLink
					title="Teaching"
			        img={ OfficialCoverArts[WritingIds.TEACHING] }
					slug="teaching"
					summary={["I teach at Olympic College.  ", <ClickHere />, " if you're a student or educator in computing."]}
				/>

    if(props.writingId == WritingIds.THOUGHTSTEM)
		return <WritingLink
					title="ThoughtSTEM"
			        img={ OfficialCoverArts[WritingIds.THOUGHTSTEM] }
					slug="software-consulting"
					summary={["I run a software consulting company.  ", <ClickHere />, " if you're curious about our past projects, or if you're looking for software consulting."]}
				/>

    if(props.writingId == WritingIds.MINECRAFT)
		return <WritingLink
					title="Minecraft"
			        img={ OfficialCoverArts[WritingIds.MINECRAFT] }
					slug="minecraft"
					backgroundPosition="center top"
					summary={["I've worked professionally with Minecraft for many years.  ", <ClickHere />, " if you like Minecraft, coding, and games in education."]}
				/>

    if(props.writingId == WritingIds.CODING)
		return <WritingLink
					title="Coding"
			        img={ OfficialCoverArts[WritingIds.CODING] }
					slug="coding"
					backgroundPosition="center bottom"
					summary={["I've been coding for a long time.  ", <ClickHere />, " if you like coding."]}
				/>

    if(props.writingId == WritingIds.GAMBIT_QUEEN)
		return <WritingLink
					title="Gambit Queen"
			        img={ OfficialCoverArts[WritingIds.GAMBIT_QUEEN] }
					slug="gambit-queen"
					//backgroundPosition="top right"
					summary={[<ClickHere />, " if you like young adult sci-fi novels about secret schools for spies."]}
				/>

    if(props.writingId == WritingIds.CODESPELLS)
		return <WritingLink
					title="CodeSpells"
			        img={ OfficialCoverArts[WritingIds.CODESPELLS] }
					slug="codespells"
					backgroundPosition="center bottom"
					backgroundSize="fit"
					summary={["I once released an indie game about coding your own magic spells.  ", <ClickHere />, " if you like magic and end user programming.", <p>(Also, this is the one piece of art on this page that wasn't generated by ai.)</p>]}
				/>

    if(props.writingId == WritingIds.DEAR_HUMAN)
		return <WritingLink
					title="Dear Human"
			        img={ OfficialCoverArts[WritingIds.DEAR_HUMAN] }
					slug="dear-human"
					//backgroundPosition="top right"
					summary={[<ClickHere />, " here if you like magical murder mysteries and psychological thrillers."]}
				/>

    if(props.writingId == WritingIds.DOLLYS_DRAGON)
		return <WritingLink
					title="Dolly's Dragon"
			        img={ OfficialCoverArts[WritingIds.DOLLYS_DRAGON] }
					slug="dollys-dragon"
					backgroundPosition="center bottom"
					summary={["When I was 13, I wrote a book. ", <ClickHere />, " if you like innocent high fantasy about dragons."]}
				/>

    if(props.writingId == WritingIds.OVER_THE_HILLS)
		return <WritingLink
					title="Over the Hills"
			        img={ OfficialCoverArts[WritingIds.OVER_THE_HILLS] }
					slug="over-the-hills"
					summary={[<ClickHere />, " if you like dark fantasy novels about wizards breaking out of prison."]}
				/>

    if(props.writingId == WritingIds.NIGHTMARE)
		return <WritingLink
					title="Nightmare"
			        img={ OfficialCoverArts[WritingIds.NIGHTMARE] }
					slug="nightmare"
					//backgroundPosition="center bottom"
					summary={[<ClickHere />, " if you like dark fantasy about rifts between our world and the nightmares beyond."]}
				/>

    if(props.writingId == WritingIds.SPIRITSTONE)
		return <WritingLink
					title="Spiritstone Chronicles"
			        img={ OfficialCoverArts[WritingIds.SPIRITSTONE] }
					slug="spiritstone"
					//backgroundPosition="center bottom"
					//backgroundSize="auto"
					summary={[<ClickHere />, " if you like fantasy novels about flying ships."]}
				/>

    if(props.writingId == WritingIds.SCIENCE)
		return <WritingLink
					title="Scientific Research"
			        img={ OfficialCoverArts[WritingIds.SCIENCE] }
					slug="science"
					summary={["Once upon a time, I went to grad school and did research.  ", <ClickHere />, " if you like human-computer interaction and coding education research."]}
				/>

    if(props.writingId == WritingIds.SHORT_STORIES)
		return <WritingLink
					title="Short Stories"
			        img={ OfficialCoverArts[WritingIds.SHORT_STORIES] }
					slug="shortstories"
					summary={["I've written a lot of short fiction over the years. ", <ClickHere />, " if you like weird stuff that you can finish in one sitting."]}
				/>

    if(props.writingId == WritingIds.UNFINISHED_NOVELS)
		return <WritingLink
					title="Unfinished Novels"
			        img={ OfficialCoverArts[WritingIds.UNFINISHED_NOVELS] }
					slug="unfinished-works"
					summary={["I don't finish all the works I start...."]}
				/>

    if(props.writingId == WritingIds.VISUAL_ARTS)
		return <WritingLink
					title="Visual Arts"
			        img={ OfficialCoverArts[WritingIds.VISUAL_ARTS] }
					slug="visual-arts"
					summary={["I've been dabbling with digital art for a long time now -- most recently ai-generated art.  ", <ClickHere />, " if you like looking at weird stuff."]}
				/>

    if(props.writingId == WritingIds.PHILOSOPHY)
		return <WritingLink
					title="Philosophy"
			        img={ OfficialCoverArts[WritingIds.PHILOSOPHY] }
					slug="philosophy"
					summary={["Many years ago, I majored in philosophy.  ", <ClickHere />, " for a wild ride."]}
				/>

    return "UNKNOWN WRITING: " + props.writingId
}
