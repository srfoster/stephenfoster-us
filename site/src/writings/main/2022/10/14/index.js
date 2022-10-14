import { FancyReactMarkdown } from "../../../../../components/index"
import { WritingIds, WritingLinkCard, WritingLink, ClickHere } from "../../../../../components/WritingLinkCards"

export const text =
[
 <FancyReactMarkdown>{`# October 14th, 2022 - Friday

Today was another refactoring day.  But I wanted to do SOME work on *The Storytree* -- the book I'm currently writing.  So I began to refactor my homepage cards into components that can be referenced elsewhere.

Like, so...
`}</FancyReactMarkdown>,
    <WritingLinkCard writingId={WritingIds.STORYTREE} />,
    <FancyReactMarkdown>{` 
TODOs: 
* Factor out the rest of the cards from the homepage.
* Fix the weird red underline on the card text above
* Factor out the images associated with each writing, so that they can be more easily changed as the Homepage Tile Contest progresses
    `}</FancyReactMarkdown>
  ]