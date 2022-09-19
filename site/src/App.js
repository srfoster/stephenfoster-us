import { useState, useEffect, useMemo} from "react";
import { HashRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

import { Card, CardContent, CardMedia, Container, Grid, Fade, Zoom} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {text as codingForBabiesText} from './writings/coding-for-babies';
import {text as politeBarbariansText} from './writings/polite-barbarians';
import {text as randomText} from './writings/random';
import {text as aboutMeText} from './writings/about-me';
import {text as dollysDragonText} from './writings/dollys-dragon';
import ReactMarkdown from 'react-markdown';




function App() {

	const theme = createTheme({
		palette: {
		  mode: 'light',
		},
	  });

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="xl">
				<Router>
					<SiteHeader />
					<Switch>
						<Route path="/" exact component={Root} />
						<Route path="/starcraft-ii" exact component={
							() => <FullDocument title="StarCraft II" text={`![sc2](/sc2.png)
							
      I am not good at this game.  But I love it. ~Stephen
							`} />} />

						<Route path="/minecraft" exact component={
							() => <FullDocument title="Minecraft Modding" text={
							  ["Check out my software (LearnToMod) or read my book (Minecraft Modding for Kids for Dummies)"]	
							} />} />

						<Route path="/dollys-dragon" exact component={
							() => <FullDocument title="Dolly's Dragon" text={dollysDragonText} />} />
						<Route path="/random" exact component={
							() => <FullDocument title="Random" text={randomText} />} />
						<Route path="/the-polite-barbarians" exact component={
							() => <FullDocument title="The Polite Barbarians" text={politeBarbariansText} />} />
						<Route path="/coding-for-babies" exact component={
							() => <FullDocument title="Coding for Babies" text={codingForBabiesText} />} />
						<Route path="/dont-teach-coding" exact component={
							() => <FullDocument title="" text={[ <img style={{ border: "1px solid black", float: "left", marginRight: 10 }} width={300} src="/blackhole.png" />,
`A book I wrote (with the brilliant Dr. Lindsey Handley) about how to teach and learn coding in the upcoming century. You can get it on Amazon [here](https://www.amazon.com/gp/product/1119602629)!`, /*<img style={{ border: "1px solid black"}} width={300} src="https://www.dont-teach.com/book-cover.png" /> */]} />} />
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
	    <p>Welcome to my site,</p>
		<p style={{ width: "50%" }}>It's under construction, and very disorganized.</p>
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
					title="Random"
					img="hacker.png"
					slug="random"
					summary={[<ClickHere/>, " if you want to be pulled into the depths of the website construction process, a minefield of dead links, misspellings, and unfinished thoughts."]}
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
					img="dark-circuit-board.jpg"
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
					backgroundPosition="bottom right"
					backgroundSize="fit"
					summary={["I once released an indie game about coding your own magic spells.  ", <ClickHere />, " if you like magic and end user programming."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="Dear Human"
					img="volcano.jpg"
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
					title="Storytree"
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
					title="Shortstories"
					img="wizard-books.jpg"
					slug="shortstories"
					summary={["I've written a lot of short fiction over the years ", <ClickHere />, " if you like weird stuff that you can finish in one sitting."]}
					/>
			</GridItem>
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
					summary={["I've been dabbling with digital art for a long time now -- most recently AI-generated art.  ", <ClickHere />, " if you like looking at weird stuff."]}
					/>
			</GridItem>
			<GridItem>
				<WritingLink
					title="StarCraft II"
					img="sc2.png"
					slug="starcraft-ii"
					summary={["I play and am not very good.  ", <ClickHere />, " to learn more about my quest to master this very difficult game."]}
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
								{showContent ? "" :
									<CardContent style={{ color: "white", backgroundColor: "rgba(0,0,0,.75)" }}>
										<h3>{props.title}</h3>
										{props.summary}
									</CardContent>}
							</div>
						</Fade>
					</CardMedia>
				}
			</Card>
		</a>
	</>
}

const FullDocument = (props) => {
	let text;

	if (props.text.map) {
		text = props.text.map((t) => {
			if (typeof (t) == "string")
				return <ReactMarkdown>{t}</ReactMarkdown>
			return t
		})
	} else {
		text = <ReactMarkdown>{props.text}</ReactMarkdown>
	}
	const history = useHistory()

	return <>
		<Fade in={true} timeout={1000}>
			<div style={{ letterSpacing: "-.003em", lineHeight: 1.58, fontSize: 21, fontFamily: "medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif", margin: 10 }}>
				<h2>{props.title}</h2>
				{text}
			</div>
		</Fade>
	</>
}

export default App;
