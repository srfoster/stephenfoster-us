import { WritingIds, WritingLinkCard } from "../../../../../components/WritingLinkCards"
import { FancyReactMarkdown, VideoWithTranscription, FetchThen } from "../../../../../components/index"

export const text =
[
    <FancyReactMarkdown>{`# October 31st, 2022 - Monday

Yesterday's blog post revealed what everyone already knows: Automated transcription makes a lot of mistakes.
I *could* fix it all by hand, but why?  I have the original text.  Shouldn't I be able to fix it automatically
(or at least semi-automatically)?

Here are a few problems I've already seen: 

* Words in the transcription that aren't in the original text (for example, if I add an "And" at the beginning of a sentence)
* Words in the original text that aren't in the transcription (for example, if I drop an "And" at the beginning of a sentence)
* Words that are mispelled (for example, if I say "He rose at dawn" instead of "He woke at dawn", or if the transcription spells something differently from how I spelled it -- "protesters" vs "protestors" )

I'm wrote some code today to detect stuff like this -- but it still took me over an hour to clean up all the discrepencies.  (TODO: Find a way to make transcriptions more accurate?  Maybe I can upload the original into Amazon trascribe next time.) 

In any event, now that I have a transcript and a text that matches up, it's time to tackle the harder problem: Bad Punctuation.

To be continued.  And because this is going to involve some dev-work, I'm moving this story over to my [coding blog](/#/coding)`}</FancyReactMarkdown>,

/*
    <FetchThen
      from="/short-videos/shortstories/never-ends/e1.json"
      then={(data) =>
        <VideoWithTranscription
          showVideo={false}
          video="https://stephenfoster-us.s3.us-west-1.amazonaws.com/short-videos/shortstories/never-ends/e1.mp4"
          transcription={
            fixTranscription(
              originalText, data

            )
          } />
      }
    />,
    */
  ]
