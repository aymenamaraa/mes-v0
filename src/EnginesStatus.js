import { Card, Progress, Badge, Tag } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';

export const EnginesStatus = () => {
  const [data, setData] = useState([]);
  console.log('🚀 ~ file: EnginesStatus.js:7 ~ EnginesStatus ~ data:', data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_BACEND_URL);

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='data-container'>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.line_speed.engine_name}
          style={{ width: 300, margin: '16px' }}
          headStyle={{ backgroundColor: '#f0f2f5' }}
        >
          <div style={{ marginBottom: '16px' }}>
            <p>Length Counter:</p>
            <Progress
              type='circle'
              percent={item.pay_off_number.length_counter}
              //   showInfo={false}
              strokeColor='#52c41a'
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <p>Main Cable Lay Length:</p>
            <Progress
              type='circle'
              percent={item.pay_off_number.Main_cable_lay_length}
              //   showInfo={false}
              strokeColor='#1890ff'
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <Tag icon={<CheckCircleOutlined />} color='success'>
              {'Diameter' + item.pay_off_number.cable_diameter}{' '}
            </Tag>
          </div>
          <div style={{ marginBottom: '16px' }}>
            {/* <p>Machine Arret:</p> */}
            {item.machine_en_panne.machine_arret ? (
              //   <Badge status='error' text='True' />
              <Tag color='magenta'>Machine Arret</Tag>
            ) : (
              <Badge status='success' text='False' />
            )}
          </div>
          <div style={{ marginBottom: '16px' }}>
            <p>Machine En Panne:</p>
            {item.machine_en_panne.machine_en_panne ? (
              <Badge status='error' text='True' />
            ) : (
              <Badge status='success' text='False' />
            )}
          </div>
          <p>Updated: {item.updated}</p>
        </Card>
      ))}
    </div>
  );
};
