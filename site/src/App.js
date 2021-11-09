import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react";
import { HashRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import Fade from '@material-ui/core/Fade';
import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";
import { Card, CardContent, Container, Grid } from '@material-ui/core';
import {text as codingForBabiesText} from './writings/coding-for-babies';
import {text as politeBarbariansText} from './writings/polite-barbarians';
import ReactMarkdown from 'react-markdown';

function App() {
	return (
		<Container maxWidth="md"> 
			<TerminalContextProvider>
				<Router>
					<SiteHeader />
					<Switch>
						<Route path="/" exact component={Root} />
						<Route path="/the-polite-barbarians" exact component={
							() => <FullDocument title="The Polite Barbarians" text={politeBarbariansText} />} />
						<Route path="/coding-for-babies" exact component={
							() => <FullDocument title="Coding for Babies" text={codingForBabiesText} />} />
					</Switch>
				</Router>
			</TerminalContextProvider>
		</Container>
	);
}

function SiteHeader(props) {

	let history = useHistory()

	return <>
		< h1 onClick={() => {
			history.push("/")
		}
		} style={{ cursor: "pointer" }}> Stephen R.Foster</h1 >
		<p>This site is under construction...</p>

		<hr />
	</>
}

const Root = (props) => {
	var [content, setContent] = useState("")
	return <>
		<Fade in={true} duration={1000}><p>Or is it...</p></Fade>
		<Fade in={true} duration={2000}>
			<ReactTerminal
				welcomeMessage={<p>This interface helps those who help themselves...</p>}
				commands={{
					help:
						<>
							<p>If you've gotten this far, congratulations!!  You must be a coder.</p>
							<p>Available command(s) for your level:</p>
							<ul>
								<li><tt>help - Prints the message you're reading</tt></li>
								<li><tt>writings - Shows you what you can read at your current level</tt></li>
								<li><tt>level - Prints your current level</tt></li>
							</ul>
						</>,
					writings: () => {
						return <Writings key={Math.random()} />
					},
					level: () => {
						return "You're a Level 1 reader!"
					},
				}}
			/>
		</Fade>
		{content}
	</>
}

const Writings = () => {
	const [showing, setShowing] = useState()
	return showing ? showing : <>
		<p>You found the writings accessible at your level.  Click a button below!</p>
		<Grid container spacing={24}>
			<Grid item md={6}>
				<WritingLink
					title="The Polite Barbarians"
					slug="the-polite-barbarians"
					summary="A charming tale about Trojan horses.  I wrote this in early 2020."
					/>
			</Grid>
			<Grid item md={6}>
				<WritingLink
					title="Coding for Babies"
					slug="coding-for-babies"
					summary="A satire on coding education and Silicon Valley culture.  I wrote this in late 2021."
					/>
			</Grid>
		</Grid>
	</>
}

const WritingLink = (props) => {
	const history = useHistory()

	return <>
		<Card>
			<CardContent>
				<h3>{props.title}</h3>
				<p>{props.summary}</p>
				<a style={{ cursor: "pointer" }} onClick={()=>{
					history.push("/"+props.slug)
					window.scrollTo(0,0)
				}}>[Read it!]</a>
			</CardContent>
		</Card>
	</>
}

const FullDocument = (props) => {
	const text = props.text.replace(/---PAGE---/g, "")
	const history = useHistory()

	return <>
		<Fade in={true} timeout={1000}>
			<Card style={{ letterSpacing: "-.003em", lineHeight: 1.58, fontSize: 21, fontFamily: "medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif", margin: 10 }}>
				<CardContent>
					<h2>{props.title}</h2>
					<ReactMarkdown>
						{text}
					</ReactMarkdown>
				</CardContent>
			</Card>
		</Fade>
	</>
}

export default App;