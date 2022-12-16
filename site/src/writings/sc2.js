import { FancyReactMarkdown } from "../components/index"
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import ReactPlayer from 'react-player/lazy';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['9/18', '9/23', '9/24', '10/2', '10/6', '10/8', '10/14', '10/15'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'APM',
        data: [16, 54, 57, 58, 55, 62, 75, 75, 83],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };


let post2022_11_04 = 
  [
    <FancyReactMarkdown>{`# December 16th, 2022
TLDR: On my alternate account, I got to Platinum League (finally)!  But I still want to get there on my main account.  To mark the occasion, I've decide to start casting my own games, so that hopefully I can look back one day and see how far I've come.  Here's my first one:`}</FancyReactMarkdown>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-4-SyAzNidQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={ true }></iframe>,
    <FancyReactMarkdown>{`
This has been a journey of over a year now: It began in 2020 when I began to rekindle my love for StarCraft II and discovered that I wasn't very good at it.  (I was placed into Silver League).

Although I improved to Gold League pretty quickly, I became stuck there, and nothing seemed to help.  I even:

* Watched all of [Vibe's](https://www.youtube.com/@ViBElol) Bronze to GM Youtube series
* Watched all of [PiG's](https://www.youtube.com/channel/UC9OluGthYmZo0vsF9IjicFg) Bronze to GM Youtube series
* Began to practice daily against the AI

Although I *felt* like I understood the game way better after almost a year of this, my rank did not improve.  I was still in Gold.  

So to what do I credit yesterday's success?  All of the above, and a few additional things.  Namely, I:

* Learned to play with my left hand (because my right hand was getting carpal tunnel syndrom) and worked my way back up from Bronze to Gold with my left hand.  This was an eye-opening experience that really shifted how I was thinking about improvement.  (A story for another time.) 
* Bought an [Azeron gaming pad](https://www.azeron.eu/)
* Revised all my hotkeys
* Did hours of practice in a hotkey trainer
* Memorized a build (PiG's ["Beginner Terran Mech Opening"](https://lotv.spawningtool.com/build/50989/playable/))

Somehow, it all came together.  In short, I went on a winning streak yesterday, bringing me solidly into Platinum League.  Next stop Diamond League! :)

But there's a catch.  I made it to Platinum on my alternative account, where I:

* Just mess around without worrying too much about my ranking
* Play "Random" on the Ladder -- not just Terran.

There's something to be said, I guess, for not taking the ladder too seriously and just trying to have fun.  That may have helped.  On the other hand, I can't shake the feeling that playing Random gives me too many "free points".  Sometimes people just resign immediately when the game starts.  Plus, people cheese me *significantly* more often when I play Random, which also gives me free points whenever I defend successfully.

So the question remains: Can I reach Platinum on my main account where I play just Terran?  We'll see.  In any event, I've decided to start tracking my progress by casting my own games as I play them (inspired by PiG and Vibe who are able to do this so effortlessly).  I did one today and won!  See video above.
      `}</FancyReactMarkdown>
  ]

export const text =
    [
      post2022_11_04
    ,
`# October 19th, 2022 - 

As a college professor, I've often been struck by a paradox: that the more skilled a person becomes, the worse we sometimes teach.   As a coder (for over 20 years now), I've forgotten what it's like to be a beginner, and sometimes this negatively affects my ability to empathise with novice students.  

This makes me feel worried because I *want* to empathise, and I think it's important for educators to cultivate empathy.  Believe it or not, this is one of the reasons I play StarCraft II.  It's a very difficult game, takes many years to master, and I find a lot of value in subjecting myself to being a beginner at something.

My plan is to blog about my journey to become a better StarCraft II player and to reflect on being a novice.  Perhaps this will help other students out there.  And I know it'll help me become a better teacher.  It already has.

Stay tuned for more awesome SC2 content :) 

`, 

`# October 16th, 2022 - Sunday

Due to an injury, I've recently had to switch to playing this game lefthanded.  I've been tracking the increase in my lefthanded APM (actions per minute) over the last month or so.
`, 
        
        <Line data={data} />,
`
Note that with my right hand, I could play at around 110 APM (on a good day), so the gap seems to be closing.
`, 
]
