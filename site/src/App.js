import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react";
import { HashRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import Fade from '@material-ui/core/Fade';
import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";
import { Button, Card, CardActions, CardContent, CardHeader, Grid } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import {text as codingForBabiesText} from './writings/coding-for-babies';
import {text as politeBarbariansText} from './writings/polite-barbarians';
import ReactMarkdown from 'react-markdown';

function App() {
	return (
		<div> 
			<TerminalContextProvider>
				<Router>
					<Switch>
						<Route path="/" exact component={Root} />
						<Route path="/the-polite-barbarians" exact component={
						   ()=> <FullDocument title="The Polite Barbarians" text={politeBarbariansText} />} />
						<Route path="/coding-for-babies" exact component={
						   ()=> <FullDocument title="Coding for Babies" text={codingForBabiesText} />} />
					</Switch>
				</Router>
			</TerminalContextProvider>
		</div>
	);
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
						return "You're a Level 1 viewer!"
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
		  <Grid item md={3}>
			  <WritingLink
				  title="The Polite Barbarians"
				  summary="A charming tale about Trojan horses.  I wrote this in early 2020."
				  onClick={
					  (e) => { setShowing(<ReadingWidget slug="the-polite-barbarians" title="The Polite Barbarians" text={politeBarbariansText} />) }
				  } />
		  </Grid>
		  <Grid item md={3}>
			  <WritingLink 
			      title="Coding for Babies"
				  summary="A satire on coding education and Silicon Valley culture.  I wrote this in late 2021."
			      onClick={
				      (e) => { setShowing(<ReadingWidget slug="coding-for-babies" title="Coding for Babies" text={codingForBabiesText} />) }
			  } />
		  </Grid>
		  <Grid item md={3}>
		  </Grid>
	  </Grid>
	</>
}

const WritingLink = (props) => {
	return <>
		<Card>
			<CardContent>
				<h3>{props.title}</h3>
				<p>{props.summary}</p>
				<a style={{cursor: "pointer"}} onClick={props.onClick}>[Read it!]</a>
			</CardContent>
		</Card>
	</>
}

//		<li><Button variant="contained" color="secondary" onClick={(e)=>{setShowing(<ReadingWidget slug="the-polite-barbarians" title="The Polite Barbarians" text={politeBarbariansText} />)}}>"Polite Barbarians"</Button> - A charming tale about Trojan horses.  I wrote this in early 2020. (I'll be typesetting it for the web over the next few days...)</li>

const ReadingWidget = (props) => {
	const [page, setPage] = useState(0)
	const pages = props.text.split("---PAGE---").map((c) => <ReactMarkdown>{c}</ReactMarkdown>)
	const history = useHistory()

	return <>
		<Fade in={true} timeout={1000}>
			<Card style={{ letterSpacing: "-.003em", lineHeight: 1.58, fontSize: 21, fontFamily: "medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif", margin: 10 }}>
				<CardContent>
					<a style={{ cursor: "pointer" }} onClick={() => history.push("/" + props.slug)}>[Share link]</a>
					<h2>{props.title}</h2>
					{pages[page]}
					<Pagination onChange={(e, p) => setPage(p - 1)} count={pages.length} color="primary" />
				</CardContent>
			</Card>
		</Fade>
	</>
}

const FullDocument = (props) => {
	const text = props.text.replace(/---PAGE---/g, "")
	const history = useHistory()

	return <>
		<Fade in={true} timeout={1000}>
			<Card style={{ letterSpacing: "-.003em", lineHeight: 1.58, fontSize: 21, fontFamily: "medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif", margin: 10 }}>
				<CardContent>
					<a style={{ cursor: "pointer" }} onClick={() => history.push("/")}>[Home]</a>
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