import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Fade from '@material-ui/core/Fade';
import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";
import { Button, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
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
    <ul>
		<li><Button variant="contained" color="secondary" onClick={(e)=>{setShowing(<ReadingWidget title="Coding for Babies" text={codingForBabiesText} />)}}>"Coding for Babies"</Button> - A satire on coding education and Silicon Valley culture.  I wrote this in late 2021. (I'll be typesetting it for the web over the next few days...)</li>
		<li><Button variant="contained" color="secondary" onClick={(e)=>{setShowing(<ReadingWidget title="The Polite Barbarians" text={politeBarbariansText} />)}}>"Polite Barbarians"</Button> - A charming tale about Trojan horses.  I wrote this in early 2020. (I'll be typesetting it for the web over the next few days...)</li>
	</ul>
  </>
}



const ReadingWidget = (props) =>{
	const [page, setPage] = useState(0) 
	const pages = props.text.split("---PAGE---").map((c)=> <ReactMarkdown>{c}</ReactMarkdown>)

	return <>
		<Fade in={true} timeout={1000}>
			<Card style={{fontFamily: "Roboto", margin: 10}}>
				<CardContent>
					<h2>{props.title}</h2>
					{pages[page]}
					<Pagination onChange={(e,p)=>setPage(p - 1)} count={pages.length} color="primary" />
				</CardContent>
			</Card>
		</Fade>
	</>
}

export default App;