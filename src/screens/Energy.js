import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Table, Spin, Col } from 'antd';
import { currentMachinesState } from '../functions/machines';
import { Typography } from 'antd';

const { Title } = Typography;

let energyTableColums = [];
let energyTableData = [];

export default function Energy() {
  const { data } = useSelector((state) => state.machines);
  const [machineState, setMachineState] = useState(currentMachinesState(data));

  useEffect(() => {
    if (data.length > 0) {
      setMachineState(currentMachinesState(data));
    }
  }, [data]);
  useEffect(() => {
    energyTableColums = [
      {
        title: 'Machine name',
        dataIndex: 'machine_name',
        key: 'machine_name',
        render: (text) => <span>{text} kWh</span>,
      },
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
    energyTableData = [
      {
        machine_name: machineState.td9.machine_name,
        instantaneous_consumed_power:
          machineState.td9.instantaneous_consumed_power,
        product_consumed_power: machineState.td9.product_consumed_power,
      },
      {
        machine_name: machineState.pb16.machine_name,
        instantaneous_consumed_power:
          machineState.pb16.instantaneous_consumed_power,
        product_consumed_power: machineState.pb16.product_consumed_power,
      },
      {
        machine_name: machineState.cb2.machine_name,
        instantaneous_consumed_power:
          machineState.cb2.instantaneous_consumed_power,
        product_consumed_power: machineState.cb2.product_consumed_power,
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
            <Title level={2} type='success'>
              Energy
            </Title>

            <Table
              pagination={false}
              bordered
              columns={energyTableColums}
              dataSource={energyTableData}
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
