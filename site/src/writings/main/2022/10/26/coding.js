
import { FancyReactMarkdown, VideoWithTranscription } from "../../../../../components/index.js"
import { Card } from '@mui/material';

const testTranscription = {
  file: "/short-videos/testing-one-two-three.mp4",
  json: {
    "jobName": "Testing123",
    "accountId": "815546122970",
    "results": {
      "transcripts": [{
        "transcript": "Testing 1 2 3."
      }],
      "items": [{
        "start_time": "0.0",
        "end_time": "1.12",
        "alternatives": [{
          "confidence": "1.0",
          "content": "Testing"
        }],
        "type": "pronunciation"
      }, {
        type: "container",
        element: (props) => <div style={{ backgroundColor: "darkred" }} {...props}></div>,
        children: [
          {
            "start_time": "1.13",
            "end_time": "1.53",
            "alternatives": [{
              "confidence": "1.0",
              "content": "1"
            }],
            "type": "pronunciation"
          },
          {
            type: "container",
            element: (props) => <div style={{ marginLeft: 10, backgroundColor: "darkgreen" }} {...props}></div>,
            children: [{
              "start_time": "1.54",
              "end_time": "1.9",
              "alternatives": [{
                "confidence": "0.9968",
                "content": "2"
              }],
              "type": "pronunciation"
            }]
          },
          {
            "start_time": "1.91",
            "end_time": "2.45",
            "alternatives": [{
              "confidence": "1.0",
              "content": "3"
            }],
            "type": "pronunciation"
          },
        ]
      },
      {
        "alternatives": [{
          "confidence": "0.0",
          "content": "."
        }],
        "type": "punctuation"
      }]
    },
    "status": "COMPLETED"
  }
}
export const text =
        [
                <FancyReactMarkdown>{`# October 26th - Monday

Made it so that I can nest my transcription animation arbitrarily deeply within various React components -- for fancy typesetting
`}</FancyReactMarkdown>
                ,
                <VideoWithTranscription
                        hideVideo={true}
                        video={testTranscription.file}
                        transcription={testTranscription.json} />,
        ]
