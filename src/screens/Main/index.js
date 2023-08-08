import React from 'react';
import { Row, Col, Card } from 'antd';
import ColoredCircleButton from '../../components/ColoredCircleButton';
const Main = (props) => {
  return (
    <>
      <Row
        gutter={24}
        style={{
          marginTop: 100,
          marginBottom: 100,
        }}
      >
        <Col span={4} offset={6}>
          <Card /*title='MES'*/ bordered={false}>
            <b>MES</b>
          </Card>
        </Col>
      </Row>
      <Row
        gutter={24}
        style={{
          marginTop: 100,
        }}
      >
        <Col span={4} >
          <Card
            hoverable
            /*title='MES'*/ bordered={false}
            onClick={() => props.navigateTo('engineInfo')}
          >
            <b> M1</b>
          </Card>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <ColoredCircleButton color='#00FF00' />
            <ColoredCircleButton color='#FFDFCD' />
            <ColoredCircleButton color='#FFE09E' />
          </div>
         
        </Col>
        <Col span={4} offset={2}>
          <Card hoverable /*title='MES'*/ bordered={false}>
            <b> M2</b>
          </Card>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <ColoredCircleButton color='#E4FFC7' />
            <ColoredCircleButton color='#FF0000' />
            <ColoredCircleButton color='#FFD700' />
          </div>
        </Col>
        <Col span={4} offset={2}>
          <Card hoverable /*title='MES'*/ bordered={false}>
            <b>M3</b>
          </Card>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <ColoredCircleButton color='#E4FFC7' />
            <ColoredCircleButton color='#FF0000' />
            <ColoredCircleButton color='#FFE09E' />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Main;
