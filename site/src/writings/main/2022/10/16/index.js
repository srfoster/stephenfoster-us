import { FancyReactMarkdown, Score } from "../../../../../components/index"
import { WritingIds, WritingLinkCard } from "../../../../../components/WritingLinkCards"


export const text =
[
 <FancyReactMarkdown>{`# October 16th, 2022 - Sunday
   
 Big picture: I'm still trying to gather the React components that will let me write about all of the things I plan to write about.  So I factored out my Score component (for doing sheet music):
`}</FancyReactMarkdown>,
 <Score
    notation={
`X: 1
M: 4/4
K: Am
|Acea|[^Gb],ecb|[Gc']ecc'|[^F^f]dA^f|[eF]cAc-|cecA|[B,GB][A,Ac][A,Ac]4|
` } />,
 <FancyReactMarkdown>{`
 I also factored out two more of my homepage cards.  First, there's music:
`}</FancyReactMarkdown>,
  <WritingLinkCard writingId={WritingIds.MUSIC} />,

 <FancyReactMarkdown>{`
 And there's StarCraft II:
`}</FancyReactMarkdown>,

  <WritingLinkCard writingId={WritingIds.SC2} />,
 <FancyReactMarkdown>{`
 I did a small blog post in each category, just to get the ball rolling.  
`}</FancyReactMarkdown>,
  ]