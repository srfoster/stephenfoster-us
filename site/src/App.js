import { useState, useEffect, useMemo} from "react";
import { HashRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

import { Card, CardContent, CardMedia, Container, Grid, Fade} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {text as codingForBabiesText} from './writings/coding-for-babies';
import {text as politeBarbariansText} from './writings/polite-barbarians';
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
			<Container maxWidth="md">
				<Router>
					<SiteHeader />
					<Switch>
						<Route path="/" exact component={Root} />
						<Route path="/the-polite-barbarians" exact component={
							() => <FullDocument title="The Polite Barbarians" text={politeBarbariansText} />} />
						<Route path="/coding-for-babies" exact component={
							() => <FullDocument title="Coding for Babies" text={codingForBabiesText} />} />
						<Route path="/dont-teach-coding" exact component={
							() => <FullDocument title="" text={[`A book I wrote about how to teach and learn coding in the upcoming century. You can get it on Amazon [here](https://www.amazon.com/gp/product/1119602629)!`, <img style={{border: "1px solid black"}} width={300} src="https://www.dont-teach.com/book-cover.png"/>]} />} />
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
		<Writings />
		<br />
		<br />
		<br />
		<br />
	</>
}


const Writings = () => {
	const [showing, setShowing] = useState()
	return showing ? showing : <>
		<Grid container spacing={12}>
			<Grid item md={6}>
				<WritingLink
					title="Don't Teach Coding"
					img="dont-teach-coding.png"
					slug="dont-teach-coding"
					summary="My book about teaching and learning coding."
					/>
			</Grid>
			<Grid item md={6}>
				<WritingLink
					title="Coding for Babies"
					img="baby-coding.jpeg"
					slug="coding-for-babies"
					summary="A satire on coding education."
					/>
			</Grid>
			<Grid item md={6}>
				<WritingLink
					title="The Polite Barbarians"
					img="conan.jpg"
					slug="the-polite-barbarians"
					summary="A charming short story about Trojan horses."
					/>
			</Grid>
		</Grid>
	</>
}

const WritingLink = (props) => {
	const history = useHistory()
	const [elevation, setElevation] = useState(1)

	return <>
		<a style={{ cursor: "pointer" }} onClick={() => {
			history.push("/" + props.slug)
			window.scrollTo(0, 0)
		}}>
			<Card 
			  onMouseOver={()=>setElevation(6)}
			  onMouseLeave={()=>setElevation(1)}
			  elevation={elevation}>
				{!props.img ? "" :
					<CardMedia
						component="img"
						height="150"
						image={props.img}
					/>}
				<CardContent>
					<h3>{props.title}</h3>
					<p>{props.summary}</p>
				</CardContent>
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