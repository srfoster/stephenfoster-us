import { useState, useEffect, useMemo} from "react";
import Terminal from "react-console-emulator";

export const TerminalInterface = (props) => {
	var [content, setContent] = useState("")
	return <>
			<Terminal
			    noDefaults
				welcomeMessage={<p>This interface helps those who help themselves...</p>}
				commands={
					{
						help: {
							fn: function () {
								return <>
									<p>If you've gotten this far, congratulations!!  You must be a coder.</p>
									<p>Available command(s) for your level:</p>
									<ul>
										<li><tt>help - Prints the message you're reading</tt></li>
										<li><tt>writings - Shows you what you can read at your current level</tt></li>
										<li><tt>level - Prints your current level</tt></li>
									</ul>
								</>
							}
						},
						writings: {
							fn:
								function () {
									return <Writings />
								}
						},
						level: {
							fn: function(){
								return "You're a Level 1 reader!"
							}
						}
					}
				}
			/>
		{content}
	</>
}