import { FancyReactMarkdown, Score } from "../../../../../components/index"
import { WritingIds, WritingLinkCard } from "../../../../../components/WritingLinkCards"


export const text =
[
 <FancyReactMarkdown>{`# October 21st, 2022 - Friday
   
Did some recent posts in the following categories.
`}</FancyReactMarkdown>,
  <WritingLinkCard writingId={WritingIds.MUSIC} />,
  <WritingLinkCard writingId={WritingIds.SC2} />,
 <FancyReactMarkdown>{`
Also, I fixed the playback button on my sheet music component, so musical blog posts will be interactive...
`}</FancyReactMarkdown>,
  ]
