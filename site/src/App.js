import { useState, useEffect, useMemo } from "react";
import { HashRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

import { Avatar, Button, Paper, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Fade, Typography, Zoom } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { text as codingForBabiesText } from './writings/coding-for-babies';
import { text as politeBarbariansText } from './writings/polite-barbarians';
import { text as randomText } from './writings/random';
import { text as aboutMeText } from './writings/about-me';
import { text as dollysDragonText } from './writings/dollys-dragon';
import { text as teachingText } from './writings/teaching';
import { text as softwareConsultingText } from './writings/software-consulting';
import { text as minecraftText } from './writings/minecraft';
import { text as gambitQueenText } from './writings/gambit-queen';
import { text as codeSpellsText } from './writings/codespells';
import { text as dearHumanText } from './writings/dear-human';
import { text as overTheHillsText } from './writings/over-the-hills';
import { text as nightmareText } from './writings/nightmare';
import { text as spiritStoneText } from './writings/spiritstone';
import { text as storyTreeText } from './writings/storytree';
import { text as scienceText } from './writings/science';
import { text as musicText } from './writings/music';
import { text as visualArtsText } from './writings/visual-arts';
import { text as philosophyText } from './writings/philosophy';
import { text as codingText } from './writings/coding';
import { text as homepageTileContestText } from './writings/homepage-tile-contest';
import { text as sc2Text } from './writings/sc2';
import { text as shortstoriesText } from './writings/shortstories';

import ReactMarkdown from 'react-markdown';

import ReactPlayer from 'react-player/lazy';

import { WritingIds, WritingLinkCard, WritingLink, ClickHere } from "./components/WritingLinkCards"
import { FancyReactMarkdown, GridItem } from "./components/index"

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
							() => <FullDocument title="Homepage Tile Contest" text={homepageTileContestText} />} />
						<Route path="/starcraft-ii" exact component={
							() => <FullDocument title="StarCraft II"
								sideThings={
									[
										<ArtInfoComment img="protoss.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** protoss detailed matte painting, deep color, fantastical, intricate detail, splash screen, complementary colors, fantasy concept art, 8k resolution trending on Artstation Unreal Engine 5`} />,

									]
								}
								text={sc2Text} />} />

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
							() => <FullDocument title="Short Fiction" text={ shortstoriesText } />} />

						<Route path="/unfinished-works" exact component={
							() => <FullDocument title="Unfinished Works" text={"The Gatherers.  Schools of Mind."} />} />
						<Route path="/dollys-dragon" exact component={
							() => <FullDocument
								sideThings={[
									<ArtInfoComment img="egg.png" text={`**Algorithm:** Stable Diffusion

**Approximate Prompt:** dragon egg style of thomas kinkade`} />,

									<ArtInfoComment alternate={true} img="cosmic-girl-with-dragon.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** girl with dragon resolution holographic astral cosmic illustration mixed media by Pablo Amaringo`} />,

									<ArtInfoComment alternate={true} img="girl-with-dragon.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** girl with pet dragon detailed matte painting`} />,
									<ArtInfoComment alternate={true} img="silver-horse-dragon-cropped.jpg" text={`**Algorithm:** Stable Diffusion

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
							() => <FullDocument title="Over the Hills" 
											sideThings={[
												<ArtInfoComment img="demon-on-tower.jpg"
														text={`**Algorithm:** Stable Diffusion

**Prompt:** gigantic demon perched on black tower sinister by Greg Rutkowski`} />,
											]}
                       text={overTheHillsText} />} /> 
						<Route path="/nightmare" exact component={
							() => <FullDocument title="Nightmare" 
											  sideThings={[
												<ArtInfoComment img="nightmare-world.jpg"
														text={`**Algorithm:** Stable Diffusion

**Prompt:** portal to nightmare world sinister by Greg Rutkowski`} />,
											  ]}
                       text={nightmareText} />} /> 
						<Route path="/spiritstone" exact component={
							() => <FullDocument title="Spiritstone" 
											  sideThings={[
												<ArtInfoComment img="skyship.jpg"
														text={`**Algorithm:** Stable Diffusion

**Prompt:** flying ship floating island in the sky ethereal fantasy hyperdetailed mist Thomas Kinkade`} />,
											  ]}
                        text={spiritStoneText} />} /> 
						<Route path="/storytree" exact component={
							() => <FullDocument title="Storytree" text={storyTreeText} />} />
						<Route path="/science" exact component={
							() => <FullDocument title="Science" text={scienceText} />} />
						<Route path="/music" exact component={
							() => <FullDocument
								sideThings={[
									<ArtInfoComment img="cubist-violin.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** violin and piano surrealism Salvador Dali matte background melting oil on canvas`} />,

									<ArtInfoComment alternate={true} img="violin-kinkade.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** violin closeup ethereal fantasy hyperdetailed mist Thomas Kinkade`} />,

									<ArtInfoComment alternate={true} img="abstract-violin.jpg" text={`**Algorithm:** Stable Diffusion

**Prompt:** violin abstract cubism Euclidean Georgy Kurasov Albert Gleizes`} />,
									<ArtInfoComment alternate={true} img="piano-kinkade.jpg" text={`**Algorithm:** Stable Diffusion

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
							() => <FullDocument title="Visual Arts"
								sideThings={
									[
										<ArtInfoComment img="weird-woman.jpg" text={`**Algorithm:** Stable Diffusion


**Prompt:** painting of a painting of a painting 8k resolution holographic astral cosmic illustration mixed media by Pablo Amaringo`} />,

									]
								}
								text={visualArtsText} />} />
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

`, <div style={{ clear: "both", display: "table" }} />]} />} />
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
		<p style={{ width: "50%", display: "none" }}>Under construction, breadth-first (many dead links).</p>
		<p style={{ display: "none" }}>Please enjoy my ai-generated art.</p>
		<Writings />
		<br />
		<br />
		<br />
		<br />
	</>
}

const Writings = () => {
	const [showing, setShowing] = useState()
	const [videoEnded, setVideoEnded] = useState(false)

	return showing ? showing : <>
		<Grid container spacing={2} alignItems="bottom">
	      <Grid item xl={6} lg={6} md={6} xs={0}>
		    <Card sx={{display: {xs: "none", md: "block"}}}>
			  <CardContent>
				<ReactPlayer
				    width="100%"
					url="main-e1.mp4"
					controls={true}
					onEnded={() => { setVideoEnded(true) }}
				/>
			  </CardContent>
		    </Card>
		  </Grid>
	      <Grid item xl={6} lg={6} md={6} xs={12}>
		    <Card>
			  <CardContent>
				   <ReactMarkdown>
					{`# About Me

I'm a software architect, designer, b/vlogger, novelist, professor, and many other things.
Although it'll take me years, I'm currently working to consolodate my various projects in one place.

Welcome to my site.  
				   `}
				   </ReactMarkdown>
			  </CardContent>
		    </Card>
		  </Grid>
		</Grid>
		<br/>
		<Grid container spacing={2} alignItems="bottom">
			<GridItem>
				<WritingLink
							title="What's New?"
							img="hacker.png"
							slug="main"
							summary={[<ClickHere />, " to see what's new!"]}
							showContent={ videoEnded }
						/>
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.DONT_TEACH_CODING } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.TEACHING } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.THOUGHTSTEM } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.MINECRAFT } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.CODING } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.GAMBIT_QUEEN } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.CODESPELLS } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.DEAR_HUMAN } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.DOLLYS_DRAGON } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.OVER_THE_HILLS } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.NIGHTMARE } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.SPIRITSTONE } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.STORYTREE } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.SCIENCE } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.SHORT_STORIES } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.UNFINISHED_NOVELS } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.MUSIC } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.VISUAL_ARTS } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.SC2 } />
			</GridItem>
			<GridItem>
				<WritingLinkCard writingId={ WritingIds.PHILOSOPHY } />
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


function ContactMeComment(props) {
	return (
		<Card>
			<CardContent>
				<Typography variant="paragraph" display="block">
					<Avatar alt="Stephen Foster" src="hacker.png" sx={{ width: 56, height: 56 }} style={{ float: "left", marginRight: 10 }} />
					Thanks for checking out on my website.  Let me know if you have any questions.
				</Typography>
			</CardContent>

			<CardActions>
				<Button variant="outlined" onclick="navigator.clipboard.writeText('<your email here>');alert('email copied to clipboard')">Contact Me</Button>
			</CardActions>
		</Card>
	)
}

const FullDocument = (props) => {
	let text;
	let sideThings = props.sideThings

	if (props.text.map) {
		text = props.text.map((t) => {
			if (typeof (t) == "string")
				return <FancyReactMarkdown>{t}</FancyReactMarkdown>
			return t
		})
	} else {
		text = <FancyReactMarkdown>{props.text}</FancyReactMarkdown>
	}
	const history = useHistory()

	return <>
		<Grid className="document" container spacing={2} alignItems="bottom">
			<Grid item xl={9} lg={9} md={9} xs={9}>
				<Paper style={{ padding: 10, paddingLeft: "10%", paddingRight: "10%" }}>
					<Fade in={true} timeout={1000}>
						<div style={{ letterSpacing: "-.003em", lineHeight: 1.58, fontSize: 21, margin: 10 }}>
							<h2>{props.title}</h2>
							{text}
						</div>
					</Fade>
				</Paper>
			</Grid>
			<Grid item xl={3} lg={3} md={3} xs={3}>
				{sideThings && sideThings.length ? sideThings.map((s) => [s, <br />]) : sideThings}
				<br />
				<ContactMeComment />
			</Grid>
		</Grid>
	</>
}

export default App;
