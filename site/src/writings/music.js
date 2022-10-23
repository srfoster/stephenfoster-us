import { FancyReactMarkdown, Score } from "../components/index"

export const text =
  [`# October 23rd, 2022 - Sunday

I looked into fixing the playback for tied notes (as mentioned in my previous music post).  Short story: I haven't fixed it. 

Longer story, here are the relevant repos:

* [react-sheet-music](https://github.com/slnsw/react-sheet-music) - The React component library
* [abcjs](https://github.com/paulrosen/abcjs) - Used under the hood

I discovered that the SheetMusic component's \`onEvent\` callback is getting called for the first note in the tie, but with a duration that doesn't take into account the second note in the tie.  And the second note in the tie doesn't seem to trigger an event at all.  I suppose I could make my code detect if it's the first note in the tie and "look ahead" for future notes, increasing the duration appropriately.  But that's a bit gross, and I'd rather use abcjs's libraries for parsing the ABC notation to help -- but I can't seem to find good API docs for abcjs. 

This will take longer to fix than I had hoped.   
  `,

    `# October 21st, 2022 - Friday

  I want to get better and reading and writing music, so I sat down to transcribe (by ear, as best I could) the first melody phrase from the song "Furr" by Blitzen Trapper.  After about 30 minutes, this is what I got:

\`\`\`music
X: 1
M: 4/4
K: Dmaj
|AF|DF/2A/1dc2B2A/2-|A2z5
\`\`\`
    `,
    <Score
      id={"furr"}
      notation={
`X: 1
M: 4/4
K: Dmaj
|AF|DF/2A/1dc2B2A/2-|A2z5
` }/>,
    `
But you might notice that the last note doesn't sound quite right.  This React sheet music component isn't handling the ties correctly.  I suppose that means I need to go in an fix it at some point...
    `,


    `# October 16th, 2022 - Sunday

I'm an amature musician, currently trying to learn the violin and piano.  In order to write about music, I'm using the \`react-sheet-music\` library, which allows me to display music that I write in ["ABC" notation](http://www.lesession.co.uk/abc/abc_notation.htm).  

For example, if I wanted to write a "song" that uses the lowest and highest notes I know how to play on the G-string of the violin, I'd write this:

\`\`\`music
X: 1
M: 4/4
K: G
|G,4G4|G,4G4|G,4G4|G,4G4|
\`\`\`

This becomes:
`,

  <Score notation={
`
X: 1
M: 4/4
K: G
|G,4G4|G,4G4|G,4G4|G,4G4|
` }/>
//|Acea|[^Gb],ecb|[Gc']ecc'|[^F^f]dA^f|[eF]cAc-|cecA|[B,GB][A,Ac][A,Ac]4||
]