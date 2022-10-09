import { useState, useEffect, useMemo} from "react";
import { HashRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

import { Avatar, Button, Paper, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Fade, Typography, Zoom} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {text as codingForBabiesText} from './writings/coding-for-babies';
import {text as politeBarbariansText} from './writings/polite-barbarians';
import {text as randomText} from './writings/random';
import {text as aboutMeText} from './writings/about-me';
import {text as dollysDragonText} from './writings/dollys-dragon';
import {text as teachingText} from './writings/teaching';
import {text as softwareConsultingText} from './writings/software-consulting';
import {text as minecraftText} from './writings/minecraft';
import {text as gambitQueenText} from './writings/gambit-queen';
import {text as codeSpellsText} from './writings/codespells';
import {text as dearHumanText} from './writings/dear-human';
import {text as overTheHillsText} from './writings/over-the-hills';
import {text as nightmareText} from './writings/nightmare';
import {text as spiritStoneText} from './writings/spiritstone';
import {text as storyTreeText} from './writings/storytree';
import {text as scienceText} from './writings/science';
import {text as musicText} from './writings/music';
import {text as visualArtsText} from './writings/visual-arts';
import {text as philosophyText} from './writings/philosophy';
import {text as codingText} from './writings/coding';
import {text as homepageTileContestText} from './writings/homepage-tile-contest';
import ReactMarkdown from 'react-markdown';


import SheetMusic from "@slnsw/react-sheet-music";
import uniqid from "uniqid";
import * as Tone from "tone";





function App() {

	const theme = createTheme({
		palette: {
		  mode: 'dark',
		},
	  });

	  //TODO: Sort these better
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="xl">
				<Router>
					<SiteHeader />
					<Switch>
						<Route path="/" exact component={Root} />
						<Route path="/homepage-tile-contest" exact component={
							() => <FullDocument title="Homepage Tile Contest" text={ homepageTileContestText } />} />
						<Route path="/starcraft-ii" exact component={
							() => <FullDocument title="StarCraft II" text={`![sc2](/sc2.png)
							
      I am not good at this game.  But I love it. ~Stephen
							`} />} />

						<Route path="/minecraft" exact component={
							() => <FullDocument title="Minecraft Modding"
								sideThings={
									[
									 <ArtInfoComment img="minecraft.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** minecraft ethereal fantasy hyperdetailed mist Thomas Kinkade`} />,

									]
								}
								text={minecraftText} />} />

						<Route path="/shortstories" exact component={
							() => <FullDocument title="Short Fiction" text={
								[
									<Grid>
			<GridItem>
				<WritingLink
					title="Coding for Babies"
					img="baby.png"
					backgroundPosition="center center"
					slug="coding-for-babies"
					summary={["A satire on coding education. " , <ClickHere/>, " if you're a programming language nerd, and/or if you're interested in computer science education."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="The Polite Barbarians"
					img="troy.png"
					slug="the-polite-barbarians"
					summary={["A silly short story about Trojan horses that I wrote for no particular reason. ", <ClickHere />, " if you like silly fiction that isn't too long (about a 5 minute read)."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
												title="Jonny Vampire"
												img="vampire3.jpg"
												slug="jonny-vampire"
												summary={["A short story I wrote when I was 18."]}
					/>
			</GridItem>

									</Grid>
								  

							  ]
							} />} />

						<Route path="/unfinished-works" exact component={
							() => <FullDocument title="Unfinished Works" text={"The Gatherers.  Schools of Mind."} />} />
						<Route path="/dollys-dragon" exact component={
							() => <FullDocument
								sideThings={[
								  <ArtInfoComment img="egg.png" text={`**Algorithm:** Stable Diffusion

**Approximate Prompt:** dragon egg style of thomas kinkade`} />,

									<ArtInfoComment alternate={ true } img="cosmic-girl-with-dragon.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** girl with dragon resolution holographic astral cosmic illustration mixed media by Pablo Amaringo`} />,

									<ArtInfoComment alternate={ true } img="girl-with-dragon.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** girl with pet dragon detailed matte painting`} />,
									<ArtInfoComment alternate={ true } img="silver-horse-dragon-cropped.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** teenage girl riding a silver dragon detailed matte painting`} />,
                                  
								]}
								title="Dolly's Dragon" text={dollysDragonText} />} />
						<Route path="/teaching" exact component={
							() => <FullDocument
								sideThings={[
								  <ArtInfoComment img="socrates-kinkade.jpg" text={`**Algorithm:** Stable Diffusion

**Approximate Prompt:** socrates style of thomas kinkade`} />,
								]}
								title="Teaching" text={teachingText} />} />
						<Route path="/software-consulting"
							exact component={
								() => <FullDocument
									sideThings={[
										<ArtInfoComment img="circuit-board.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** circuit board tree trending on Artstation Unreal Engine 3D shading shadow depth`} />,
										<ArtInfoComment alternate img="steampunk-circuit-board.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** circuit board tree steampunk engine`} />,
										<ArtInfoComment alternate img="cosmic-circuit-board.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** circuit board tree 8k resolution holographic astral cosmic illustration mixed media by Pablo Amaringo`} />,
										<ArtInfoComment alternate img="kinkade-circuit-board.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** circuit board tree ethereal fantasy hyperdetailed mist Thomas Kinkade`} />,
										<ArtInfoComment alternate img="tree-chip.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** circuit board tree cyberpunk 2099 blade runner 2049 neon`} />,
									]}
									title="Software Consulting" text={softwareConsultingText} />} />
						<Route path="/gambit-queen" exact component={
							() => <FullDocument title="Gambit Queen"
									sideThings={[
										<ArtInfoComment img="girl-secret-agent-chess.jpg"
											text={`**Algorithm:** Superimposition of two images below`} />,
										<ArtInfoComment alternate img="cyberpunk-girl-1.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** cyberpunk 2099 blade runner 2049 neon girl secret agent`} />,
										<ArtInfoComment alternate img="cyberpunk-girl-2.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** cyberpunk girl cyberpunk 2099 blade runner 2049 neon`} />,
										<ArtInfoComment alternate img="eye-closeup-1.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** closeup of woman's eye with a chessboard reflected on the iris oil painting by James Gurney`} />,
										<ArtInfoComment alternate img="eye-closeup-2.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** closeup of woman's eye with a chessboard reflected on the iris `} />,
										<ArtInfoComment alternate img="purple-face.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** closeup woman's face, chess board in the background synthwave neon retro synthwave neon retro`} />,
										<ArtInfoComment alternate img="green-chessboard.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** chess board tron cyberpunk neon lights synthwave neon retro`} />,
										<ArtInfoComment alternate img="chess-dojo.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** chess board tron synthwave neon retro`} />,
										<ArtInfoComment alternate img="chess-go.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** chess board cyberpunk 2099 blade runner 2049 neon`} />,
										<ArtInfoComment alternate img="chess-fantasy.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** chess board ethereal fantasy hyperdetailed mist Thomas Kinkade`} />,
										<ArtInfoComment alternate img="chess-girls-fantasy.jpg"
											backgroundPosition="center bottom"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** chess queen ethereal fantasy hyperdetailed mist Thomas Kinkade`} />,
										<ArtInfoComment alternate img="sheses.jpg"
											backgroundPosition="center bottom"
											text={`**Algorithm:** Stable Diffusion
										
**Prompt:** chess queen synthwave neon retro`} />,
									]}
								
								text={gambitQueenText} />} /> 
						<Route path="/codespells" exact component={
							() => <FullDocument title="CodeSpells"
									sideThings={[
										<ArtInfoComment alternate img="codespells.jpg"
											backgroundPosition="center bottom"
											text={`This was painted by Jason Rosenstock.  This category is exempt from the homepage tile contest for ai-generated art`} />,
									]}
								text={codeSpellsText} />} /> 
						<Route path="/dear-human" exact component={
							() => <FullDocument title="Dear Human"
								sideThings={[
									<ArtInfoComment img="desert-demon.jpg"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** demon fighting wizard in desert sinister by Greg Rutkowski`} />,
									<ArtInfoComment alternate img="desert-kid.jpg"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** young desert hero with sword oil painting by James Gurney`} />,
									<ArtInfoComment alternate img="desert-rider.jpg"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** hero in the desert oil painting by James Gurney`} />,
									<ArtInfoComment alternate img="desert-dude.jpg"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** necromancer in the desert oil painting by James Gurney`} />,
									<ArtInfoComment alternate img="desert-demon-2.jpg"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** demon in the desert sinister by Greg Rutkowski`} />,
								]}
								text={dearHumanText} />} /> 
						<Route path="/over-the-hills" exact component={
							() => <FullDocument title="Over the Hills" text={overTheHillsText} />} /> 
						<Route path="/nightmare" exact component={
							() => <FullDocument title="Nightmare" text={nightmareText} />} /> 
						<Route path="/spiritstone" exact component={
							() => <FullDocument title="Spiritstone" text={spiritStoneText} />} /> 
						<Route path="/storytree" exact component={
							() => <FullDocument title="Storytree" text={storyTreeText} />} /> 
						<Route path="/science" exact component={
							() => <FullDocument title="Science" text={scienceText} />} /> 
						<Route path="/music" exact component={
							() => <FullDocument
								sideThings={[
								  <ArtInfoComment img="cubist-violin.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** violin and piano surrealism Salvador Dali matte background melting oil on canvas`} />,

									<ArtInfoComment alternate={ true } img="violin-kinkade.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** violin closeup ethereal fantasy hyperdetailed mist Thomas Kinkade`} />,

									<ArtInfoComment alternate={ true } img="abstract-violin.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** violin abstract cubism Euclidean Georgy Kurasov Albert Gleizes`} />,
									<ArtInfoComment alternate={ true } img="piano-kinkade.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** violin and piano ethereal fantasy hyperdetailed mist Thomas Kinkade`} />,
									<ArtInfoComment alternate={true} img="piano.jpg"
										backgroundPosition="bottom right"
										text={`**Algorithm:** Stable Diffusion

**Prompt:** surrealism Salvador Dali matte background melting oil on canvas`} />,

									<ArtInfoComment alternate={true} img="weird-piano.jpg"
										backgroundPosition="bottom right"
										text={`**Algorithm:** Stable Diffusion

**Prompt:** `} />,
                                  
								]}
							    	
								title="Music" text={musicText} />} /> 
						<Route path="/visual-arts" exact component={
							() => <FullDocument title="Visual Arts" text={visualArtsText} />} /> 
						<Route path="/philosophy" exact component={
							() => <FullDocument title="Philosophy" text={philosophyText} />} /> 
						<Route path="/coding" exact component={
							() => <FullDocument
								sideThings={
									[
										<ArtInfoComment img="gandalf-with-computer.jpg"
											backgroundPosition="center bottom"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** cyberpunk gandalf oil painting by James Gurney`} />,

									 <ArtInfoComment alternate img="cyberpunk-gandalf.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** `} />,
										<ArtInfoComment alternate img="city-wizard.jpg"
											backgroundPosition="center bottom"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** wizard with a staff in a cyberpunk urban setting oil painting by James Gurney`} />,
										<ArtInfoComment alternate img="hacker-beanie.jpg"
											backgroundPosition="center bottom"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** hacker with sunglasses and a hoodie oil painting by James Gurney`} />,
										<ArtInfoComment alternate img="scifi-wizard-1.jpg"
											backgroundPosition="center bottom"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** science fiction wizard oil painting by James Gurney`} />,
										<ArtInfoComment alternate img="scifi-wizard-2.jpg"
											backgroundPosition="center top"
											text={`**Algorithm:** Stable Diffusion

**Prompt:** wizard hacker oil painting by James Gurney`} />,
									]
								}
								title="Coding" text={codingText} />} /> 

            <Route path="/main" exact component={
							() => <FullDocument
								sideThings={<ArtInfoComment img="hacker.png" text={`**Algorithm:** Stable Diffusion

**Approximate Prompt:** hacker in the matrix, style of thomas kinkade`} />}
								title="" text={[
									randomText]} />} />
						<Route path="/the-polite-barbarians" exact component={
							() => <FullDocument title="The Polite Barbarians" text={politeBarbariansText} />} />
						<Route path="/coding-for-babies" exact component={
							() => <FullDocument title="Coding for Babies" text={codingForBabiesText} />} />
						<Route path="/dont-teach-coding" exact component={
							() => <FullDocument title=""
								sideThings={
									[
									 <ArtInfoComment img="sci-fi-tablet.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** computer terminal cyberpunk 2099 blade runner 2049 neon`} />,

									 <ArtInfoComment alternate img="coop-dot.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** computer terminal synthwave neon retro`} />,
									]
								}
								text={["# Don't Teach Coding", <img style={{ border: "1px solid black", marginRight: 10 }} width={300} src="/dont-teach-coding-cover.jpg" />,
`A book I wrote (with the brilliant Dr. Lindsey Handley) about how to teach and learn coding in the upcoming century. You can [get it on Amazon here](https://www.amazon.com/gp/product/1119602629).

Although the book is written for "coding teachers" — we take a broad view of what it means to be one:

   * You're a teacher when you teach in a K-12 classroom.  
   * You're a teacher when you teach your own children
   * You're a teacher when you're teaching yourself

So, if you're a coding teacher, we wrote this book for you.

[Check it out!](https://www.amazon.com/gp/product/1119602629)

`,  <div style={{ clear: "both", display: "table"}} /> ]} />} />
						<Route path="/about-me" exact component={
							() => <FullDocument title="" text={aboutMeText} />} />
					</Switch>
				</Router>
			</Container>
		</ThemeProvider>
	);
}

function SiteHeader(props) {

	let history = useHistory()

	return <>
		< h1 onClick={() => {
			history.push("/")
		}
		} style={{ cursor: "pointer" }}> Stephen R. Foster</h1 >
		
	</>
}

function Root() {
	return <>
		<video width={500} controls>
	      <source src="test-e1.mp4" type="video/mp4" />
	      Your browser does not support the video tag.
		</video>
		<br />
		<br />
		<p style={{ width: "50%", display: "none" }}>Under construction, breadth-first (many dead links).</p>
		<p style={{ display: "none"}}>Please enjoy my ai-generated art.</p>
		<Writings />
		<br />
		<br />
		<br />
		<br />
	</>
}


const ClickHere = (props) => {
	return <Fade in={true} timeout={1000}><span style={{textDecoration: "underline"}}>Click</span></Fade> 
}

const GridItem = (props) => {
	return <Grid item xl={3} lg={4} md={6} xs={6}>
	  { props.children }
	</Grid>
}

const Writings = () => {
	const [showing, setShowing] = useState()
	return showing ? showing : <>
		<Grid container spacing={2} alignItems="bottom">
			<GridItem>
				<WritingLink
					title="What's New?"
					img="hacker.png"
					slug="main"
					summary={[<ClickHere/>, " to see what's new!"]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Don't Teach Coding"
					img="sci-fi-tablet.jpg"
					slug="dont-teach-coding"
					summary={["I wrote a book about teaching and learning coding. ", <ClickHere />, " to learn more, or to buy it."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Teaching"
					img="socrates-kinkade.jpg"
					slug="teaching"
					summary={["I teach at Olympic College.  ", <ClickHere />, " if you're a student or educator in computing."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="ThoughtSTEM"
					img="circuit-board.jpg"
					slug="software-consulting"
					summary={["I run a software consulting company.  ", <ClickHere />, " if you're curious about our past projects, or if you're looking for software consulting."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Minecraft"
					img="minecraft.jpg"
					slug="minecraft"
					backgroundPosition="center top"
					summary={["I've worked professionally with Minecraft for many years.  ", <ClickHere/>, " if you like Minecraft, coding, and games in education."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Coding"
					img="gandalf-with-computer.jpg"
					slug="coding"
					backgroundPosition="center bottom"
					backgroundSize="auto"
					summary={["I've been coding for a long time.  ", <ClickHere/>, " if you like coding."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Gambit Queen"
					img="girl-secret-agent-chess.jpg"
					slug="gambit-queen"
					//backgroundPosition="top right"
					summary={[<ClickHere/>, " if you like young adult sci-fi novels about secret schools for spies."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="CodeSpells"
					img="codespells.jpg"
					slug="codespells"
					backgroundPosition="center bottom"
					backgroundSize="fit"
					summary={["I once released an indie game about coding your own magic spells.  ", <ClickHere />, " if you like magic and end user programming.", <p>(Also, this is the one piece of art on this page that wasn't generated by ai.)</p>]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Dear Human"
					img="desert-demon.jpg"
					slug="dear-human"
					//backgroundPosition="top right"
					summary={[<ClickHere />, " here if you like magical murder mysteries and psychological thrillers."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Dolly's Dragon"
					img="egg.png"
					slug="dollys-dragon"
					backgroundPosition="center bottom"
					summary={["When I was 13, I wrote a book. ", <ClickHere />, " if you like innocent high fantasy about dragons."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Over the Hills"
					img="demon-on-tower.jpg"
					slug="over-the-hills"
					summary={[<ClickHere/>, " if you like dark fantasy novels about wizards breaking out of prison." ]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Nightmare"
					img="nightmare-world.jpg"
					slug="nightmare"
					//backgroundPosition="center bottom"
					summary={[<ClickHere/>, " if you like dark fantasy about rifts between our world and the nightmares beyond."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Spiritstone Chronicles"
					img="skyship.jpg"
					slug="spiritstone"
					//backgroundPosition="center bottom"
					//backgroundSize="auto"
					summary={[<ClickHere/>, " if you like fantasy novels about flying ships."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="The Storytree"
					img="tree-with-eyes2.jpg"
					slug="storytree"
					//backgroundPosition="center bottom"
					summary={[<ClickHere/>, " if you like science fiction novels about evil trees."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Scientific Research"
					img="alchemy.jpg"
					slug="science"
					summary={["Once upon a time, I went to grad school and did research.  ", <ClickHere />, " if you like human-computer interaction and coding education research."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Short Stories"
					img="wizard-books.jpg"
					slug="shortstories"
					summary={["I've written a lot of short fiction over the years. ", <ClickHere />, " if you like weird stuff that you can finish in one sitting."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Unfinished Novels"
					img="ancient-books.jpg"
					slug="unfinished-works"
					summary={["I don't finish all the works I start...."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Music"
					img="cubist-violin.jpg"
					slug="music"
					summary={["I'm on a quest to become a better musician.  ", <ClickHere />, " if you're interested in music and the learning thereof."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Visual Arts"
					img="weird-woman.jpg"
					slug="visual-arts"
					summary={["I've been dabbling with digital art for a long time now -- most recently ai-generated art.  ", <ClickHere />, " if you like looking at weird stuff."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="StarCraft II"
					img="sc2.png"
					slug="starcraft-ii"
					summary={["I play and am not very good.  ", <ClickHere />, " to learn more about my quest to master this very difficult game.", <p>(This art piece was done with style-transfer, unlike the others.)</p>]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Philosophy"
					img="black-and-green-typewriter.jpg"
					slug="philosophy"
					summary={["Many years ago, I majored in philosophy.  ", <ClickHere />, " for a wild ride." ]}
					/>
			</GridItem>
		</Grid>
	</>
}

const ArtInfoComment = (props) => {
  const history = useHistory()

  return (
	  <Card>
		  <CardContent>
			  <Typography variant="h6">{props.alternate ? "Runner Up" : "Winning Homepage Tile"}</Typography>
		  </CardContent>
		  <CardMedia style={{
			  "background": "url(" + props.img + ")",
			  backgroundSize:
				  props.backgroundSize ? props.backgroundSize : "cover",
			  backgroundPosition:
				  props.backgroundPosition ? props.backgroundPosition : "0% 0%",
			  height: 300
		  }}>
		  </CardMedia>
		  <CardContent>
			  <ReactMarkdown>
				  {props.text}
			  </ReactMarkdown>
		  </CardContent>
		  <CardActions>
			  <Button variant="outlined" onClick={() => {  
                 history.push("/homepage-tile-contest")
			  }}>What's the Homepage Tile Contest?</Button>
		  </CardActions>
	  </Card> 
  )
}

const WritingLink = (props) => {
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
						{}
						<Fade in={true} timeout={ 5000 }>
							<div>
								<CardContent style={{ color: "white", backgroundColor: "rgba(0,0,0,.75)" }}>
									{props.title}
									{!showContent ? "" : <div style={{marginTop: 15}}>{props.summary}</div>}
								</CardContent>
							</div>
						</Fade>
					</CardMedia>
				}
			</Card>
		</a>
	</>
}


//Inspired by: https://codesandbox.io/s/markdown-abcjs-forked-2dbtly?file=/src/App.js:350-412
function Score({ notation, id }) {
	const [isPlaying, setIsPlaying] = useState(false);

	const synth = new Tone.PolySynth(Tone.Synth).toDestination();


	function onEvent(event) {
		if (!event) {
		  return;
		}
		event.notes.forEach((n) => {
		  synth.triggerAttackRelease(n.name, n.duration);
		});
	}

	function play() {
		if (isPlaying) { //Why??? SF
			document.getElementById();
		}
		setIsPlaying(!isPlaying);
    }

	return (
		<>
			<div style={{
				backgroundColor: "white"}}>
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


function ContactMeComment(props) {
	return(
		<Card>
			<CardContent>
				<Typography variant="paragraph" display="block">
					<Avatar alt="Stephen Foster" src="hacker.png" sx={{ width: 56, height: 56 }} style={{ float: "left", marginRight: 10 }} />
					Thanks for checking out on my website.  Let me know if you have any questions.
				</Typography>
			</CardContent>

			<CardActions>
				<Button variant="outlined">Contact Me</Button>
			</CardActions>
		</Card>
	)
}

const FullDocument = (props) => {
	let text;
	let sideThings = props.sideThings


	let components = {
		//We hijack the markdown for code like: ```language {some content on many lines}```
		//  Find pre tags with code inside, and use the language to render various components
		//TODO: But we can't render markdown inside those custom components (not working for some reason)
		//   So the benefit goes down significantly.  Can we fix this?
		pre: ({ node, inline, className, children, ...props }) => {
			let match; 
			
			if(children[0] && children[0].type == "code")
			  match = /language-(\w+)/.exec(children[0].props.className || "");

			if(!match)
			  return <pre className={className} {...props}>{children}</pre>

			let codeText = children[0].props.children[0]

			let ret = (!inline &&
				match[1] === "music") ? (
				<Score
					id={uniqid()}
					notation={`${codeText}`.replace(/\n$/, "")}
				/>
			) : match[1] === "card" ? ( //TODO: Can we give state to these in-line components that come from the document text?
					<>
						<details>
						  <summary>{codeText.split("\n")[0] }</summary>
						  <ReactMarkdown children={codeText.split("\n").slice(1)} />
						</details>
					</>	
			) : (
				<code className={className} {...props}>{codeText}</code>
			);

			console.log("ret", ret)

			return ret
		}
	}

	if (props.text.map) {
		text = props.text.map((t) => {
			if (typeof (t) == "string")
				return <ReactMarkdown components={components}>{t}</ReactMarkdown>
			return t
		})
	} else {
		text = <ReactMarkdown components={components}>{props.text}</ReactMarkdown>
	}
	const history = useHistory()

	return <>
		<Grid className="document" container spacing={2} alignItems="bottom">
	    <Grid item xl={9} lg={9} md={9} xs={9}>
        <Paper style={{padding: 10, paddingLeft: "10%", paddingRight: "10%"}}>
			    <Fade in={true} timeout={1000}>
				    <div style={{ letterSpacing: "-.003em", lineHeight: 1.58, fontSize: 21, margin: 10 }}>
					    <h2>{props.title}</h2>
					    {text}
				    </div>
			    </Fade>
        </Paper>
      </Grid>
	    <Grid item xl={3} lg={3} md={3} xs={3}>
		{ sideThings && sideThings.length ? sideThings.map((s)=>[s,<br/>]) : sideThings}
		<br/>
		<ContactMeComment/>
      </Grid>
    </Grid>
	</>
}

export default App;
