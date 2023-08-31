import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Table, Spin, Col } from 'antd';
import { currentMachinesState } from '../functions/machines';
import { Typography } from 'antd';

const { Title } = Typography;

let productionTableColums = [];
let productionTableData = [];
export default function Production() {
  const { data } = useSelector((state) => state.machines);
  const [machineState, setMachineState] = useState(currentMachinesState(data));

  useEffect(() => {
    if (data.length > 0) {
      setMachineState(currentMachinesState(data));
    }
  }, [data]);
  useEffect(() => {
    productionTableColums = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
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
        render: (text) => <span>{Math.round(text * 100) / 100}  m/min</span>,
      },
      {
        title: 'Operator name',
        dataIndex: 'operator',
        key: 'operator',
        render: (text) => <span>{text}</span>,
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
    productionTableData = [
      {
        key: `td9${machineState.td9.ID}`,
        recipe: machineState.td9.recipe,
        quantity_in: machineState.td9.quantity_in,
        stranding_direction: machineState.td9.stranding_direction,
        cable_diameter: machineState.td9.cable_diameter,
        pay_off_number: machineState.td9.pay_off_number,
        line_speed: machineState.td9.line_speed,
        operator: machineState.td9.operator,
        id: machineState.td9.ID,
        length_counter_set: machineState.td9.length_counter_set,
        length_counter_act: machineState.td9.length_counter_act,
        remaining_time_min: machineState.td9.remaining_time_min,
        remaining_time_hour: machineState.td9.remaining_time_hour,
        meter_reached: machineState.td9.meter_reached,
      },
      {
        key: `pb16${machineState.pb16.ID}`,
        recipe: machineState.pb16.recipe,
        quantity_in: machineState.pb16.quantity_in,
        stranding_direction: machineState.pb16.stranding_direction,
        cable_diameter: machineState.pb16.cable_diameter,
        pay_off_number: machineState.pb16.pay_off_number,
        line_speed: machineState.pb16.line_speed,
        operator: machineState.pb16.operator,
        id: machineState.pb16.ID,
        length_counter_set: machineState.pb16.length_counter_set,
        length_counter_act: machineState.pb16.length_counter_act,
        remaining_time_min: machineState.pb16.remaining_time_min,
        remaining_time_hour: machineState.pb16.remaining_time_hour,
        meter_reached: machineState.pb16.meter_reached,
      },

      {
        key: `cb2${machineState.cb2.ID}`,
        recipe: machineState.cb2.recipe,
        quantity_in: machineState.cb2.quantity_in,
        stranding_direction: machineState.cb2.stranding_direction,
        cable_diameter: machineState.cb2.cable_diameter,
        pay_off_number: machineState.cb2.pay_off_number,
        line_speed: machineState.cb2.line_speed,
        operator: machineState.cb2.operator,
        id: machineState.cb2.ID,
        length_counter_set: machineState.cb2.length_counter_set,
        length_counter_act: machineState.cb2.length_counter_act,
        remaining_time_min: machineState.cb2.remaining_time_min,
        remaining_time_hour: machineState.cb2.remaining_time_hour,
        meter_reached: machineState.cb2.meter_reached,
      },
    ];
  }, [machineState]);
  return (
    <div>
      {machineState ? (
        <Row
          style={{
            marginTop: 20,
            marginBottom: 100,
            height: 500,
          }}
        >
          <Col span={18} offset={4}>
            <Title level={2} type='success'>
              Production
            </Title>
            <Table
              pagination={false}
              bordered
              columns={productionTableColums}
              dataSource={productionTableData}
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
