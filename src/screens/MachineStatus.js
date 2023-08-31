import React, { useEffect, useState } from 'react';
import { Radio, Row, Col, Table, Button, Badge } from 'antd';
import GaugeComponent from 'react-gauge-component';
import ColoredCircleButton from './components/ColoredCircleButton';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const labels = [
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

const values = [
  '75.15',
  '40.00',
  '41.85',
  '84.40',
  '45.55',
  '80.70',
  '77.00',
  '56.65',
  '30.20',
  '40.45',
  '35.80',
  '20.55',
  '52.95',
  '28.25',
  '34.10',
  '43.70',
  '64.05',
  '65.90',
  '60.35',
  '67.75',
  '47.40',
  '73.30',
  '58.50',
  '85.00',
  '69.60',
];

export default function MachineStatus({ machine }) {
  const navigate = useNavigate();
  const [radioVal, setRadioVal] = useState('');
  useEffect(() => {
    setRadioVal('informations');
  }, []);
  const [pieValue, setPieValue] = useState([]);
  useEffect(() => {
    if (radioVal !== 'efficiency') setPieValue([]);
  }, [radioVal]);

  const productionTableClumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Operator name',
      dataIndex: 'operator',
      key: 'operator',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Recipe',
      dataIndex: 'recipe',
      key: 'recipe',
      render: (text) => <span>{text} mm</span>,
    },

    {
      title: 'Qunatity in',
      dataIndex: 'quantity_in',
      key: 'quantity_in',
      render: (text) => <span>{text} kg</span>,
    },
    {
      title: 'Stranding direction',
      dataIndex: 'stranding_direction',
      key: 'stranding_direction',
      render: (text) => <span>{text ? 'Right' : 'Left'}</span>,
    },
    {
      title: 'Cable diameter',
      dataIndex: 'cable_diameter',
      key: 'cable_diameter',
      render: (text) => <span>{Math.round(text * 100) / 100} mm</span>,
    },
    {
      title: 'Pay off number',
      dataIndex: 'pay_off_number',
      key: 'pay_off_number',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Line speed',
      dataIndex: 'line_speed',
      key: 'line_speed',
      render: (text) => <span>{text} m/min</span>,
    },
    {
      title: 'Length counter set',
      dataIndex: 'length_counter_set',
      key: 'length_counter_set',
      render: (text) => <span>{text} m</span>,
    },
    {
      title: 'Length counter act',
      dataIndex: 'length_counter_act',
      key: 'length_counter_act',
      render: (text) => <span>{text} m</span>,
    },
    {
      title: 'Remaining time minutes',
      dataIndex: 'remaining_time_min',
      key: 'remaining_time_min',
      render: (text) => <span>{text} min</span>,
    },
    {
      title: 'Remaining time hours',
      dataIndex: 'remaining_time_hour',
      key: 'remaining_time_hour',
      render: (text) => <span>{text} h</span>,
    },
    {
      title: 'Reporting activation',
      dataIndex: 'meter_reached',
      key: 'meter_reached',
      render: (text) => <span>{text.toString()}</span>,
    },
  ];

  const productionTableData = [
    {
      key: machine.ID,
      recipe: machine.recipe,
      quantity_in: machine.quantity_in,
      stranding_direction: machine.stranding_direction,
      cable_diameter: machine.cable_diameter,
      pay_off_number: machine.pay_off_number,
      line_speed: Math.round(machine.line_speed * 100) / 100,
      operator: machine.operator,
      id: machine.ID,
      length_counter_set: machine.length_counter_set,
      length_counter_act: machine.length_counter_act,
      remaining_time_min: machine.remaining_time_min,
      remaining_time_hour: machine.remaining_time_hour,
      meter_reached: machine.meter_reached,
      extruder_working: machine.extruder_working
        ? machine.extruder_working
        : undefined,
    },
  ];

  const td9ProductionColumns = [
    ...productionTableClumns,
    {
      title: 'Main cable lay length',
      dataIndex: 'main_cable_lay_length',
      key: 'main_cable_lay_length',
      render: (text) => <span>{text} mm</span>,
    },
  ];
  const td9ProductionTableData = [
    {
      ...productionTableData[0],
      main_cable_lay_length: machine.main_cable_lay_length,
    },
  ];

  const pb16ProductionTableClumns = [
    ...productionTableClumns,
    {
      title: 'Extruder heat zone',
      dataIndex: 'extruder_working',
      key: 'extruder_working',
      render: (text) => <span>{text.toString()}</span>,
    },
    {
      title: 'Extruder working',
      dataIndex: 'extruder_working',
      key: 'extruder_working',
      render: (value) => {
        let Extruder1;
        let Extruder2;
        if (value === 0) {
          Extruder1 = 'red';
          Extruder2 = 'red';
        }
        if (value === 1) {
          Extruder1 = 'lime';
          Extruder2 = 'lime';
        }
        if (value === 2) {
          Extruder1 = 'lime';
          Extruder2 = 'red';
        }
        if (value === 3) {
          Extruder1 = 'red';
          Extruder2 = 'lime';
        }

        return (
          <div
            style={{
              marginTop: -30,
              marginLeft: -20,
            }}
          >
            <Badge.Ribbon text='Extruder 1' key='Extruder1' color={Extruder1} />
            <br />
            <Badge.Ribbon text='Extruder 2' key='Extruder2' color={Extruder2} />
          </div>
        );
      },
    },
  ];
  const pb16ProductionTableData = [
    {
      ...productionTableData[0],
      extruder_working: machine.extruder_working,
    },
  ];

  const pb16ProductionExtruder1Columns = [
    {
      title: 'Heat zone 1',
      dataIndex: 'extruder_1_heat_zone_1',
      key: 'extruder_1_heat_zone_1',
      render: (text) => <span>{Math.round(text * 100) / 100} °C</span>,
    },
    {
      title: 'Heat zone 2',
      dataIndex: 'extruder_1_heat_zone_2',
      key: 'extruder_2_heat_zone_2',
      render: (text) => <span>{Math.round(text * 100) / 100} °C</span>,
    },
    {
      title: 'Heat zone 3',
      dataIndex: 'extruder_1_heat_zone_3',
      key: 'extruder_1_heat_zone_3',
      render: (text) => <span>{Math.round(text * 100) / 100} °C</span>,
    },
    {
      title: 'Heat zone 4',
      dataIndex: 'extruder_1_heat_zone_4',
      key: 'extruder_1_heat_zone_4',
      render: (text) => <span>{Math.round(text * 100) / 100} °C</span>,
    },
  ];
  const pb16ProductionExtruder1Data = [
    {
      extruder_1_heat_zone_1: machine.extruder_1_heat_zone_1,
      extruder_1_heat_zone_2: machine.extruder_1_heat_zone_2,
      extruder_1_heat_zone_3: machine.extruder_1_heat_zone_3,
      extruder_1_heat_zone_4: machine.extruder_1_heat_zone_4,
    },
  ];
  const pb16ProductionExtruder2Columns = [
    {
      title: 'Heat zone 1',
      dataIndex: 'extruder_2_heat_zone_1',
      key: 'extruder_2_heat_zone_1',
      render: (text) => <span>{Math.round(text * 100) / 100} °C</span>,
    },
    {
      title: 'Heat zone 2',
      dataIndex: 'extruder_2_heat_zone_2',
      key: 'extruder_2_heat_zone_2',
      render: (text) => <span>{Math.round(text * 100) / 100} °C</span>,
    },
    {
      title: 'Heat zone 3',
      dataIndex: 'extruder_2_heat_zone_3',
      key: 'extruder_2_heat_zone_3',
      render: (text) => <span>{Math.round(text * 100) / 100} °C</span>,
    },
  ];
  const pb16ProductionExtruder2Data = [
    {
      extruder_2_heat_zone_1: machine.extruder_2_heat_zone_1,
      extruder_2_heat_zone_2: machine.extruder_2_heat_zone_2,
      extruder_2_heat_zone_3: machine.extruder_2_heat_zone_3,
    },
  ];

  const performanceTableColums = [
    {
      title: 'Operator name',
      dataIndex: 'operator',
      key: 'operator',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Operator working time',
      dataIndex: 'operator_working_time',
      key: 'operator_working_time',
      render: (text) => <span>{text} min</span>,
    },

    {
      title: 'Time break down',
      dataIndex: 'time_break_down',
      key: 'time_break_down',
      render: (text) => <span>{text} min</span>,
    },
  ];
  const performanceTableData = [
    {
      operator: machine.operator,
      operator_working_time: machine.operator_working_time,
      time_break_down: machine.time_break_down,
    },
  ];

  const energyTableColums = [
    {
      title: 'Instantaneous consumed power',
      dataIndex: 'instantaneous_consumed_power',
      key: 'instantaneous_consumed_power',
      render: (text) => <span>{text} Kw</span>,
    },
    {
      title: 'Power consumed since product start',
      dataIndex: 'product_consumed_power',
      key: 'product_consumed_power',
      render: (text) => <span>{text} kWh</span>,
    },
  ];
  const energyTableData = [
    {
      instantaneous_consumed_power: machine.instantaneous_consumed_power,
      product_consumed_power: machine.product_consumed_power,
    },
  ];

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Efficiency',
        data: values,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  // ____________________________________________________________________________________

  const pieData = {
    labels: [
      'Decrease of speed',
      'Maintenance',
      'Series change',
      'Mchine start-up',
      'Supply disruption',
    ],
    datasets: [
      {
        data: pieValue, // [12, 6, 3, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      labels: {
        render: 'label',
      },
    },
  };

  // ____________________________________________________________________________________________________________ ///////////////////////////////////////////////////////////////////////////

  const onLineHover = (data) => {
    return data.y;
  };
  const areEquals = (eff, val) => {
    return eff === Number(val);
  };

  const lineOptions = {
    responsive: true,
    onHover: (event, elements) => {
      if (elements.length > 0) {
        const efficiencytemp = onLineHover(elements[0].element.$context.parsed);
        areEquals(efficiencytemp, Number(values[0])) &&
          setPieValue([12, 6, 3, 0, 0]);
        areEquals(efficiencytemp, Number(values[1])) &&
          setPieValue([45, 32, 12, 10, 8]);
        areEquals(efficiencytemp, Number(values[2])) &&
          setPieValue([43, 30, 9, 8, 6]);
        areEquals(efficiencytemp, Number(values[3])) &&
          setPieValue([10, 7, 3, 0, 0]);
        areEquals(efficiencytemp, Number(values[4])) &&
          setPieValue([41, 30, 9, 8, 6]);
        areEquals(efficiencytemp, Number(values[5])) &&
          setPieValue([13, 6, 3, 0, 0]);
        areEquals(efficiencytemp, Number(values[6])) &&
          setPieValue([16, 6, 3, 0, 0]);
        areEquals(efficiencytemp, Number(values[7])) &&
          setPieValue([20, 16, 20, 0, 0]);
        areEquals(efficiencytemp, Number(values[8])) &&
          setPieValue([45, 40, 10, 8]);
        areEquals(efficiencytemp, Number(values[9])) &&
          setPieValue([45, 32, 12, 10, 8]);
        areEquals(efficiencytemp, Number(values[10])) &&
          setPieValue([45, 38, 12, 10, 8]);
        areEquals(efficiencytemp, Number(values[11])) &&
          setPieValue([52, 40, 35, 10, 8]);
        areEquals(efficiencytemp, Number(values[12])) &&
          setPieValue([20, 16, 18, 0, 0]);
        areEquals(efficiencytemp, Number(values[13])) &&
          setPieValue([45, 40, 10, 10, 8]);
        areEquals(efficiencytemp, Number(values[14])) &&
          setPieValue([45, 32, 12, 10, 8]);
        areEquals(efficiencytemp, Number(values[15])) &&
          setPieValue([15, 38, 12, 10, 8]);
        areEquals(efficiencytemp, Number(values[16])) &&
          setPieValue([52, 40, 35, 10, 8]);
        areEquals(efficiencytemp, Number(values[17])) &&
          setPieValue([20, 16, 18, 0, 0]);
        areEquals(efficiencytemp, Number(values[18])) &&
          setPieValue([45, 40, 16, 10, 8]);
        areEquals(efficiencytemp, Number(values[19])) &&
          setPieValue([40, 28, 16, 10, 8]);
        areEquals(efficiencytemp, Number(values[20])) &&
          setPieValue([45, 30, 9, 8, 6]);
        areEquals(efficiencytemp, Number(values[21])) &&
          setPieValue([20, 19, 20, 0, 0]);
        areEquals(efficiencytemp, Number(values[22])) &&
          setPieValue([20, 19, 21, 0, 0]);
        areEquals(efficiencytemp, Number(values[23])) &&
          setPieValue([20, 16, 13, 0, 0]);
        areEquals(efficiencytemp, Number(values[24])) &&
          setPieValue([20, 19, 18, 0, 0]);
        areEquals(efficiencytemp, Number(values[25])) &&
          setPieValue([41, 32, 12, 8, 6]);
        areEquals(efficiencytemp, Number(values[26])) &&
          setPieValue([20, 16, 20, 0, 0]);
        areEquals(efficiencytemp, Number(values[27])) &&
          setPieValue([20, 16, 13, 0, 0]);
        areEquals(efficiencytemp, Number(values[28])) &&
          setPieValue([10, 7, 3, 0, 0]);

        return efficiencytemp;
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Efficiency',
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        afterDataLimits: (axis) => {
          axis.options.ticks.callback = (value) => value + ' %'; // Append " units" to y-axis labels
        },
      },
      x: {
        scaleLabel: {
          display: true,
          max: '23:00',
          labelString: 'Time', // X-axis label
        },
      },
    },
  };

  return (
    <div style={{ marginLeft: 500 }}>
      <Row
        gutter={24}
        style={{
          marginTop: 80,
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
              height: 500,
            }}
          >
            <Col span={2}>
              <div
                style={{
                  marginTop: '30px',
                  height: 500,
                }}
              >
                <div>
                  <ColoredCircleButton
                    machineStatus={machine.machine_state}
                    stopReason={machine.stop_reason}
                  />
                </div>
              </div>
            </Col>
            <Col span={10}>
              <h1>{`Recipe: ${machine.recipe} mm`}</h1>
              <h1>
                Line speed : {Math.round(machine.line_speed * 100) / 100} m/min
              </h1>
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
                value={machine.TRS}
              />
              <span
                style={{
                  marginLeft: 140,
                  fontSize: 40,
                }}
              >
                Efficiency
              </span>
            </Col>
          </Row>
        </>
      )}
      {/* ------------------------------------ Production---------  */}
      {radioVal === 'production' && (
        <Row
          style={{
            marginTop: 20,
            marginLeft: -500,
            height: 500,
          }}
        >
          <Col>
            <Table
              pagination={false}
              bordered
              columns={
                machine.extruder_1_heat_zone_1
                  ? pb16ProductionTableClumns
                  : td9ProductionColumns
              }
              dataSource={
                machine.extruder_1_heat_zone_1
                  ? pb16ProductionTableData
                  : td9ProductionTableData
              }
            />

            {machine.extruder_1_heat_zone_1 !== undefined &&
              machine.extruder_1_heat_zone_1 !== null && (
                <div style={{ marginTop: 50, width: 500, marginLeft: 500 }}>
                  <h3>Extruder 1</h3>
                  <Table
                    pagination={false}
                    bordered
                    columns={pb16ProductionExtruder1Columns}
                    dataSource={pb16ProductionExtruder1Data}
                  />
                </div>
              )}

            {machine.extruder_1_heat_zone_1 !== undefined &&
              machine.extruder_1_heat_zone_1 !== null && (
                <div style={{ marginTop: 50, width: 380, marginLeft: 550 }}>
                  <h3>Extruder 2</h3>
                  <Table
                    pagination={false}
                    bordered
                    columns={pb16ProductionExtruder2Columns}
                    dataSource={pb16ProductionExtruder2Data}
                  />
                </div>
              )}
            <div
              style={{
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button type='primary' onClick={() => navigate('/Production')}>
                All machines - production
              </Button>
            </div>
          </Col>
        </Row>
      )}
      {/* ------------------------------------ Performance */}
      {radioVal === 'performance' && (
        <Row
          style={{
            marginTop: 20,
            marginBottom: 100,
            marginLeft: 30,
            height: 500,
          }}
        >
          <Col>
            <Table
              pagination={false}
              bordered
              columns={performanceTableColums}
              dataSource={performanceTableData}
            />
            <div
              style={{
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button type='primary' onClick={() => navigate('/Performance')}>
                All machines - performance
              </Button>
            </div>
          </Col>
        </Row>
      )}
      {/* ------------------------------------ Energy */}
      {radioVal === 'energy' && (
        <Row
          style={{
            marginTop: 20,
            marginBottom: 100,
            height: 500,
          }}
        >
          <Col>
            <Table
              pagination={false}
              bordered
              columns={energyTableColums}
              dataSource={energyTableData}
            />
            <div
              style={{
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button type='primary' onClick={() => navigate('/Energy')}>
                All machines - energy
              </Button>
            </div>
          </Col>
        </Row>
      )}
      {/* ------------------------------------ efficiency */}
      {radioVal === 'efficiency' && (
        <Row
          style={{
            marginTop: 20,
            marginBottom: 100,
            height: 500,
            marginLeft: -500,
          }}
        >
          <Col span={4}>
            {pieValue.length > 0 && <Pie data={pieData} options={pieOptions} />}
          </Col>
          <Col offset={2} span={12}>
            <Line options={lineOptions} data={lineData} />
            <span style={{ marginLeft: '94%' }}>Time</span>
          </Col>
        </Row>
      )}
      {/* ------------------------------------ Energy */}
    </div>
  );
}
