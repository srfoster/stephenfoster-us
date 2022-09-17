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
		  mode: 'dark',
		},
	  });

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="md">
				<Router>
					<SiteHeader />
					<Switch>
						<Route path="/" exact component={Root} />
						<Route path="/starcraft-ii" exact component={
							() => <FullDocument title="StarCraft II" text={`![sc2](/sc2.png)
							
      I am not good at this game.  But I love it. ~Stephen
							`} />} />
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

const Writings = () => {
	const [showing, setShowing] = useState()
	return showing ? showing : <>
		<Grid container spacing={1} alignItems="bottom">
			<Grid item xl={6} lg={6} md={6} xs={12}>
				<WritingLink
					title="Random"
					img="hacker.png"
					slug="random"
					summary={["Stuff I haven't categorized yet. ", <ClickHere/>, " if you want to be pulled into the depths of the website construction process, a minefield of dead links, misspellings, and unfinished thoughts."]}
					/>
			</Grid>
			<Grid item xl={6} lg={6} md={6} xs={12}>
				<WritingLink
					title="Don't Teach Coding"
					img="blackhole.png"
					slug="dont-teach-coding"
					summary={["I wrote a book about teaching and learning coding. ", <ClickHere />, " to learn more, or to buy it."]}
					/>
			</Grid>
			<Grid item xl={6} lg={6} md={6} xs={12}>
				<WritingLink
					title="Coding for Babies"
					img="baby.png"
					backgroundPosition="center center"
					slug="coding-for-babies"
					summary={["A satire on coding education. " , <ClickHere/>, " if you're a programming language nerd, and/or if you're interested in computer science education."]}
					/>
			</Grid>
			<Grid item xl={6} lg={6} md={6} xs={12}>
				<WritingLink
					title="The Polite Barbarians"
					img="troy.png"
					slug="the-polite-barbarians"
					summary={["A silly short story about Trojan horses that I wrote for no particular reason. ", <ClickHere />, " if you like silly fiction that isn't too long (about a 5 minute read)."]}
					/>
			</Grid>
			<Grid item xl={6} lg={6} md={6} xs={12}>
				<WritingLink
					title="StarCraft II"
					img="sc2.png"
					slug="starcraft-ii"
					summary={["I play and am not very good.  ", <ClickHere />, " to learn more about my quest to master this very difficult game."]}
					/>
			</Grid>
			<Grid item xl={6} lg={6} md={6} xs={12}>
				<WritingLink
					title="Dolly's Dragon"
					img="egg.png"
					slug="dollys-dragon"
					backgroundPosition="center bottom"
					summary={["Dolly's Dragon"]}
					/>
			</Grid>
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
				    <CardMedia style={{"background": "url("+props.img+")", backgroundPosition: props.backgroundPosition ? props.backgroundPosition : "0% 0%", height: 300, opacity: elevation == 1 ? 0.80 : 1}}>
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