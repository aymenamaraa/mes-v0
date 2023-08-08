import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import Login from './screens/Login';
import Container from './screens/Container';
import { Trend } from './screens/Trend';
const { Header, Footer } = Layout;

const App = () => {
  const [token, setToken] = useState(null);

  const [trendDisplay, setTrendDisplay] = useState(false);

  return (
    <Layout>
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
        {token && (
          <div style={{ justifyContent: 'space-between' }}>
            <Button type='primary' danger onClick={() => setToken(null)}>
              Logout
            </Button>
            <Button
              type='primary'
              style={{ marginLeft: 1500 }}
              onClick={() => setTrendDisplay(false)}
            >
              Engines
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => setTrendDisplay(true)}
            >
              Trend
            </Button>
          </div>
        )}
      </Header>
      {!token && <Login persistToken={setToken} />}
      {token && trendDisplay && <div style={{width:'1400px', marginLeft:'200px'}}> <Trend /></div>}
      {token && !trendDisplay && <Container />}
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        MES ©2023
      </Footer>
    </Layout>
  );
};
export default App;
