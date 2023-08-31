import React, { useEffect } from 'react';
import MachineStatus from './screens/MachineStatus';
import MainScreen from './screens/MainScreen';
import Logout from './screens/components/Logout';
import Login from './screens/Login';
import { useSelector, useDispatch } from 'react-redux';

import logo from './img/logo.jpg';

import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Layout, Button, Image } from 'antd';
// import {
//   startPeriodicUpdates,
//   fetchMachineStatus,
// } from './redux/machinesSlice';
import Production from './screens/Production';
import Performance from './screens/Performance';
import Energy from './screens/Energy';
import { Trend } from './screens/Trend';
const { Header, Footer, Content } = Layout;

function App() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMachineStatus());
  //   // Dispatch the startPeriodicUpdates action when the component mounts
  //   dispatch(startPeriodicUpdates());

  //   // Return a cleanup function to stop updates when the component unmounts
  //   return () => {
  //     // Dispatch any cleanup actions you might need here
  //   };
  // }, [dispatch]);
  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {isAuthenticated && (
          <>
            <Button type='primary' onClick={() => navigate('/')}>
              Machines
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => navigate('/Production')}
            >
              Production
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => navigate('/Performance')}
            >
              Performance
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => navigate('/Energy')}
            >
              Energy
            </Button>
            <Button
              style={{ marginLeft: 20, marginRight: 940 }}
              onClick={() => navigate('/Trend')}
            >
              Trend
            </Button>
          </>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
          }}
        >
          <Image
            preview={false}
            draggable={false}
            src={logo}
            alt='Logo'
            style={
              isAuthenticated
                ? { width: 260, marginBottom: 1, marginLeft: 20 }
                : { width: 260, marginBottom: 1, marginLeft: 1570 }
            }
          />
          {isAuthenticated && <Logout />}
        </div>
      </Header>
      <Content>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path='/' element={<MainScreen />} />
              <Route path='/MachineStatus' element={<MachineStatus />} />
              <Route path='/Production' element={<Production />} />
              <Route path='/Performance' element={<Performance />} />
              <Route path='/Energy' element={<Energy />} />
              <Route path='/Trend' element={<Trend />} />
              <Route path='/logout' element={<Logout />} />
            </>
          ) : (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<Navigate to='/login' />} />
            </>
          )}
        </Routes>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#001529',
          color: '#f3fafa',
        }}
      >
        <span
          style={{
            fontSize: 20,
          }}
        >
          Chakira manufacturing system ©2023
        </span>
      </Footer>
    </Layout>
  );
}

export default App;
