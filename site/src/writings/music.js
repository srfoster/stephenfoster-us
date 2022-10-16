import { FancyReactMarkdown, Score } from "../components/index"

export const text =
[`# October 16th, 2022 - Sunday

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