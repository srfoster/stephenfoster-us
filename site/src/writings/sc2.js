//import { FancyReactMarkdown, Score } from "../components/index"
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

export const text =
    [
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
