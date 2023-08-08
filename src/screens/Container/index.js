import React, { useState } from 'react';
import { Layout } from 'antd';
import Main from '../Main';
import EngineInfos from '../EngineInfos';
const { Content } = Layout;
const Container = () => {
  const [isShown, setIsShown] = useState('main');

  return (
    <Content
      className='site-layout'
      style={{
        padding: 24,
        margin: 0,
        minHeight: 700,
        marginLeft:350
        // background: colorBgContainer,
      }}
    >
      {isShown === 'main' && <Main navigateTo={setIsShown} />}
      {isShown === 'engineInfo' && <EngineInfos navigateTo={setIsShown} />}
    </Content>
  );
};
export default Container;
