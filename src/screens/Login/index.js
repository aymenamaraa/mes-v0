import React from 'react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
const { Content } = Layout;

const Login = (props) => {
  console.log('🚀 ~ file: index.js:12 ~ Login ~ props:', props);

  const onFinish = (values) => {
    console.log('Success:', values);
    if (!(values.username === 'admin') || !(values.password === 'admin'))
      alert('wrong login or password');
    props.persistToken(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Content
      className='site-layout'
      style={{
        padding: 24,
        marginLeft: 500,
        marginTop: 250,
        minHeight: 520,
        // background: colorBgContainer,
      }}
    >
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};
export default Login;
