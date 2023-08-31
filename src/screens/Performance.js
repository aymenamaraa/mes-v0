import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Table, Spin, Col } from 'antd';
import { currentMachinesState } from '../functions/machines';
import { Typography } from 'antd';

const { Title } = Typography;


let perfomranceTableColums = [];
let perfomranceTableData = [];
export default function Performance() {
  const { data } = useSelector((state) => state.machines);
  const [machineState, setMachineState] = useState(currentMachinesState(data));

  useEffect(() => {
    if (data.length > 0) {
      setMachineState(currentMachinesState(data));
    }
  }, [data]);
  useEffect(() => {
    perfomranceTableColums = [
      {
        title: 'Machine name',
        dataIndex: 'machine_name',
        key: 'machine_name',
        render: (text) => <span>{text}</span>,
      },
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
    perfomranceTableData = [
      {
        machine_name: machineState.td9.machine_name,
        operator: machineState.td9.operator,
        operator_working_time: machineState.td9.operator_working_time,
        time_break_down: machineState.td9.time_break_down,
      },
      {
        machine_name: machineState.pb16.machine_name,
        operator: machineState.pb16.operator,
        operator_working_time: machineState.pb16.operator_working_time,
        time_break_down: machineState.pb16.time_break_down,
      },
      {
        machine_name: machineState.cb2.machine_name,
        operator: machineState.cb2.operator,
        operator_working_time: machineState.cb2.operator_working_time,
        time_break_down: machineState.cb2.time_break_down,
      },
    ];
  }, [machineState]);

  return (
    <div style={{ marginLeft: 200 }}>
      {machineState ? (
        <Row
          style={{
            marginTop: 20,
            marginBottom: 100,
            height: 500,
          }}
        >
          <Col span={6} offset={6}>
            <Title level={2} type='success'>Performance</Title>
            <Table
              pagination={false}
              bordered
              columns={perfomranceTableColums}
              dataSource={perfomranceTableData}
            />
          </Col>
        </Row>
      ) : (
        <div
          style={{
            marginLeft: -200,
            marginTop: '200px',
            marginBottom: '500px',
            textAlign: 'center',
            borderRadius: '4px',
          }}
        >
          <Spin tip='Loading' size='large' />
        </div>
      )}
    </div>
  );
}
