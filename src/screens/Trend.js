import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Row, Col } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,

  Title,
  Tooltip,
  Legend
);

const lineOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      max: 1000,
      title: {
        display: true,
        text: 'm / min',
      },
    },
    x: {
      title: {
        display: true,
        text: 'hour',
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Line speed (day)',
    },
  },
};

const lineLabels = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

const lineData = {
  labels: lineLabels,
  datasets: [
    {
      label: 'BIT 1250',
      data: lineLabels.map(() => faker.number.int({ min: 0, max: 170 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'AYMAK Extruder',
      data: lineLabels.map(() => faker.number.int({ min: 0, max: 900 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Regid strander',
      data: lineLabels.map(() => faker.number.int({ min: 0, max: 80 })),
      borderColor: 'rgb(57, 138, 39)',
      backgroundColor: 'rgba(57, 138, 39, 0.5)',
    },
  ],
};
    // __________________________________________________________________________________
    const histo1Options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 440,
          title: {
            display: true,
            text: 'min',
          },
        },
      },
    
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'BIT 1250: performance/operator',
        },
      },
    };
    
    const histo1Data = {
      labels: ['operator 1', 'operator 2', 'operator 3'],
      datasets: [
        {
          label: 'Working time',
          data: [343, 400, 300],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Time breakdown',
          data: [242, 300, 200],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    
        // __________________________________________________________________________________

    // __________________________________________________________________________________       label: 'AYMAK Extruder',

    const histo2Options = { 
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 440,
          title: {
            display: true,
            text: 'min',
          },
        },
      },
    
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'AYMAK Extruder: performance/operator',
        },
      },
    };
    
    const histo2Data = {
      labels: ['operator 1', 'operator 2', 'operator 3'],
      datasets: [
        {
          label: 'Working time',
          data: [343, 400, 300],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Time breakdown',
          data: [242, 300, 200],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    
        // __________________________________________________________________________________

    // __________________________________________________________________________________
    const histo3Options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 440,
          title: {
            display: true,
            text: 'min',
          },
        },
      },
    
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Regid strander: performance/operator',
        },
      },
    };
    
    const histo3Data = {
      labels: ['operator 1', 'operator 2', 'operator 3'],
      datasets: [
        {
          label: 'Working time',
          data: [343, 400, 300],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Time breakdown',
          data: [242, 300, 200],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    
        // __________________________________________________________________________________


export function Trend() {
  return (
    <div>
      <Row>
        <Col offset={6} span={20} style={{ height: 400 }}>
          <Line options={lineOptions} data={lineData} />
        </Col>
      </Row>
      <Row style={{ marginTop: 50 }}>
        <Col span={7}>
          <Bar options={histo1Options} data={histo1Data} />
        </Col>
        <Col span={7} offset={1}>
          <Bar options={histo2Options} data={histo2Data} />
        </Col>
        <Col span={7} offset={1}>
          <Bar options={histo3Options} data={histo3Data} />
        </Col>
      </Row>
    </div>
  );
}
