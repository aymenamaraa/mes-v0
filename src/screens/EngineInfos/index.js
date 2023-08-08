import React, { useState } from 'react';
import { Radio, Row, Col, Button, Table } from 'antd';
import ColoredCircleButton from '../../components/ColoredCircleButton';
import GaugeComponent from 'react-gauge-component';
import { Pie , Line} from 'react-chartjs-2';
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
import { faker } from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function EngineInfos() {
  const [radioVal, setRadioVal] = useState('informations');

  const productionTableClumns = [
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      render: (text) => <b>{text}</b>,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      render: (text) => (
        <span
          style={{
            color: 'blue',
          }}
        >
          {text}
        </span>
      ),
    },
  ];
  const productionTableData = [
    {
      key: '1',
      label: 'Recipe',
      value: '16 mm',
    },
    {
      key: '2',
      label: 'Operator',
      value: 'operator 1',
    },
    {
      key: '3',
      label: 'ID',
      value: '0',
    },
    {
      key: '4',
      label: 'Main cable LAY length',
      value: '93 mm',
    },
    {
      key: '5',
      label: 'Stranding direction',
      value: 'Z',
    },
    {
      key: '6',
      label: 'Line speed',
      value: '120 m/min',
    },
    {
      key: '7',
      label: 'Pay off number',
      value: '0',
    },
    {
      key: '8',
      label: 'Length counter set',
      value: '10200 m',
    },
    {
      key: '9',
      label: 'Length counter act',
      value: '8600 m',
    },
    {
      key: '10',
      label: 'Remaining Time',
      value: 'Oh 13min',
    },
  ];
  const performanceTableColums = [
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      render: (text) => <b>{text}</b>,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      render: (text) => (
        <span
          style={{
            color: 'blue',
          }}
        >
          {text}
        </span>
      ),
    },
  ];
  const performanceTableData = [
    {
      key: '1',
      label: 'Operator 1',
      value: '348 min',
    },
    {
      key: '2',
      label: 'Time Break Down',
      value: '30 min',
    },
  ];



  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const labels =  [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Efficiency',
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },

    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Efficiency',
      },
    },
  };

  return (
    <>
      <Row
        gutter={24}
        style={{
          marginTop: 80,
          marginLeft: 300,
        }}
      >
        <Col>
          <Radio.Group value={radioVal}>
            <Radio.Button
              value='informations'
              onClick={() => setRadioVal('informations')}
            >
              Informations
            </Radio.Button>
            <Radio.Button
              value='production'
              onClick={() => setRadioVal('production')}
            >
              Production
            </Radio.Button>
            <Radio.Button
              value='performance'
              onClick={() => setRadioVal('performance')}
            >
              Performance
            </Radio.Button>
            <Radio.Button value='energy' onClick={() => setRadioVal('energy')}>
              Energy
            </Radio.Button>
            <Radio.Button
              value='efficiency'
              onClick={() => setRadioVal('efficiency')}
            >
              Efficiency
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      {/* ------------------------------------ informations */}
      {radioVal === 'informations' && (
        <>
          <Row
            style={{
              marginBottom: 100,
              marginLeft: 300,
              height: 500,
            }}
          >
            <Col span={2}>
              <div
                style={{
                  marginTop: '50px',
                  height: 500,
                }}
              >
                <h1>M1</h1>
                <div>
                  <ColoredCircleButton color='#00FF00' />
                </div>
                <div>
                  <ColoredCircleButton color='#FFDFCD' />
                </div>
                <div>
                  <ColoredCircleButton color='#FFE09E' />
                </div>
              </div>
            </Col>
            <Col span={10}>
              <h1>Running</h1>
              <h1>Line speed : 120 m/min</h1>
              <Button
                type='text'
                style={{
                  marginLeft: 240,
                }}
                size='large'
              >
                Efficiency
              </Button>
              <GaugeComponent
                arc={{
                  subArcs: [
                    {
                      limit: 20,
                      color: '#EA4228',
                      showMark: true,
                    },
                    {
                      limit: 40,
                      color: '#F58B19',
                      showMark: true,
                    },
                    {
                      limit: 60,
                      color: '#F5CD19',
                      showMark: true,
                    },
                    {
                      limit: 100,
                      color: '#5BE12C',
                      showMark: true,
                    },
                  ],
                }}
                value={88}
              />
            </Col>
          </Row>
          <Row
            style={{
              marginLeft: 300,
            }}
          >
            <h1>Recipe: 16mm</h1>
          </Row>
        </>
      )}
      {/* ------------------------------------ Production */}
      {radioVal === 'production' && (
        <Row
          style={{
            marginTop: 20,
            marginBottom: 100,
            marginLeft: 350,
            height: 500,
          }}
        >
          <Table
            bordered
            columns={productionTableClumns}
            dataSource={productionTableData}
          />
        </Row>
      )}
      {/* ------------------------------------ Performance */}
      {radioVal === 'performance' && (
        <Row
          style={{
            marginTop: 20,
            marginBottom: 100,
            marginLeft: 350,
            height: 500,
          }}
        >
          <Table
            bordered
            columns={performanceTableColums}
            dataSource={performanceTableData}
          />
        </Row>
      )}
      {/* ------------------------------------ efficiency */}



      {radioVal === 'efficiency' && (
        <Row
          style={{
            marginTop: 20,
            marginBottom: 100,
            marginLeft: 250,
            height: 500,
          }}
        >
            <Col span={12}>
            <Line options={options} data={lineData} />
            </Col>
            <Col span={12}>

            {/* <Pie data={pieData} /> */}

            </Col>

        </Row>
      )}


      {/* ------------------------------------ Energy */}
      </>
  );
}
