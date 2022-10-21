import { FancyReactMarkdown, Score } from "../components/index"

export const text =
  [
    `# October 21st, 2022 - Friday

  I want to get better and reading and writing music, so I sat down to transcribe (by ear, as best I could) the first phrase from the song "Furr" by Blitzen Trapper.  After about 30 minutes, this is what I got:

\`\`\`music
X: 1
M: 4/4
K: Dmaj
|AF|DF/2Adc2B2A-|Az|
\`\`\`
    `,
    <Score
      id={"furr"}
      notation={
`X: 1
M: 4/4
K: Dmaj
|AF|DF/2Adc2B2A-|Az|
` }/>,
    `
That's about as close as I can make it out by ear.  What I'd love to do next is contact someone who knows more about music than I do and see if they would transcribe it differently.   

TODOs:

* Fix the play back on my sheet music component. It's not playing the tied notes correctly
* Find a music teacher with a better ear than I -- someone who can keep me honest... 
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