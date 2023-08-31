import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { fetchMachineStatus } from '../redux/machinesSlice';
import { Row, Col, Card, Spin, Modal } from 'antd';
import MachineStatus from './MachineStatus';
import MainScreenMachineCard from './components/MainScreenMachineCard';
import logo from '../img/logo.jpg';
import { currentMachinesState } from '../functions/machines';
const { Meta } = Card;

export default function MainScreen() {
  // const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.machines);
  const [machineState, setMachineState] = useState(null);
  console.clear();
  console.log(
    '🚀 ~ file: MainScreen.js:18 ~ MainScreen ~ machineState:',
    machineState
  );

  const [openTd9, setOpenTd9] = useState(false);
  const [openPb16, setOpenPb16] = useState(false);
  const [openCb2, setOpenCb2] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchMachineStatus());
  // }, [dispatch]);
  useEffect(() => {
    if (data.length > 0) {
      setMachineState(currentMachinesState(data));
    }
  }, [data]);
  return (
    <div style={{ marginLeft: 200 }}>
      {!machineState ? (
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
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <Row
            gutter={24}
            style={{
              marginTop: 100,
              marginBottom: 100,
            }}
          >
            <Col span={4} offset={8}>
              <Card bordered={true} cover={<img src={logo} alt='Logo' />}>
                <Meta description='Chakira Manufacturing Execution System' />
              </Card>
            </Col>
          </Row>
          <Row
            gutter={24}
            style={{
              marginTop: 100,
            }}
          >
            <Col span={6}>
              <MainScreenMachineCard
                machine={machineState.td9}
                setFunction={setOpenTd9}
              />
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              ></div>
            </Col>
            <Col span={6} offset={2}>
              <MainScreenMachineCard
                machine={machineState.pb16}
                setFunction={setOpenPb16}
              />
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              ></div>
            </Col>
            <Col span={6} offset={2}>
              <MainScreenMachineCard
                machine={machineState.cb2}
                setFunction={setOpenCb2}
              />
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              ></div>
            </Col>
          </Row>
          {/* ________________________________________________________________ modals */}
          <Modal
            title={machineState.td9.machine_name}
            centered
            open={openTd9}
            onOk={() => setOpenTd9(false)}
            onCancel={() => setOpenTd9(false)}
            width={1600}
          >
            <MachineStatus machine={machineState.td9} />
          </Modal>
          {/* ________________________________________________________________ modals */}
          <Modal
            title={machineState.pb16.machine_name}
            centered
            open={openPb16}
            onOk={() => setOpenPb16(false)}
            onCancel={() => setOpenPb16(false)}
            width={1600}
          >
            <MachineStatus machine={machineState.pb16} />
          </Modal>
          {/* ________________________________________________________________ modals */}
          <Modal
            title={machineState.cb2.machine_name}
            centered
            open={openCb2}
            onOk={() => setOpenCb2(false)}
            onCancel={() => setOpenCb2(false)}
            width={1600}
          >
            <MachineStatus machine={machineState.cb2} />
          </Modal>
        </>
      )}
    </div>
  );
}
