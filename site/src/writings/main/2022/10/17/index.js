import { FancyReactMarkdown, Score } from "../../../../../components/index"
import { WritingIds, WritingLinkCard } from "../../../../../components/WritingLinkCards"


export const text =
[
 <FancyReactMarkdown>{`# October 17th, 2022 - Monday
   
 Factored homepage tiles into a file, so I can reference them from other components (not just the homepage).  Like this!

`}</FancyReactMarkdown>,
 <WritingLinkCard writingId={WritingIds.DONT_TEACH_CODING} />,
 <FancyReactMarkdown>{`
I also STARTED to factor the homepage image names into a centralized place, so I can update them as the [Homepage Tile Contest](/#/homepage-tile-contest) progresses.  I might even move them into a database at some point, so it'll be nice to have them in one place.

I didn't actually have it in me to do a second big refactorign in one day, though, so... TOMORROW!
`}</FancyReactMarkdown>,
  ]