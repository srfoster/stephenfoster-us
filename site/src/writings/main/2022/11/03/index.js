import { WritingIds, WritingLinkCard } from "../../../../../components/WritingLinkCards"
import { FancyReactMarkdown } from "../../../../../components/index"

export const text =
[
 <FancyReactMarkdown>{`# November 3rd, 2022 - Thursday

It's back to the drawing board with some of my animated transcription components.  Have been working on ways of automatically fixing the punctuation, and automatically typesetting certain parts of the transcription (e.g. paragraph breaks and scene breaks).  Adding illustrations are the big goal, but we gotta do the basic typesetting first.
`}</FancyReactMarkdown>,

  <WritingLinkCard writingId={WritingIds.CODING} />,
  ]
