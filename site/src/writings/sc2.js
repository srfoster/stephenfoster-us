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
    [`# October 16th, 2022 - Sunday

Due to an injury, I've recently had to switch to playing this game lefthanded.  I've been tracking the increase in my lefthanded APM (actions per minute) over the last month or so.
`, 
        
        <Line data={data} />,
`
Note that with my right hand, I could play at around 110 APM (on a good day), so the gap seems to be closing.
`, 
]