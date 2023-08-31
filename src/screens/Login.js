import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
const { Content } = Layout;

const Login = () => {
  const dispatch = useDispatch();

  // Simulated API call
  //   const simulateApiCall = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         // Simulate successful authentication with a user object
  //         if (username === "user" && password === "20082023") {
  //           const user = {
  //             id: 1,
  //             username: "user",
  //             // ...other user data...
  //           };
  //           resolve({ success: true, user });
  //         } else {
  //           resolve({ success: false });
  //         }
  //       }, 500); // Simulating a delay of 0.5 second
  //     });
  //   };

  // const handleLogin = async () => {
  //   // Simulated authentication logic
  //   try {
  //     // Simulating an API call with a delay
  //     const response = await simulateApiCall();
  //     console.log("🚀 ~ file: login.js:15 ~ handleLogin ~ response:", response)

  //     // Check the response and update the user state if successful
  //     if (response.success) {
  //       const user = response.user;
  //       dispatch(setUser(user));
  //     } else {
  //       console.log("Authentication failed. Please check your credentials.");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during login:", error);
  //   }
  // };

  // return (
  //   <div>
  //     <input
  //       type="text"
  //       placeholder="Username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //     />
  //     <input
  //       type="password"
  //       placeholder="Password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />
  //     <button onClick={handleLogin}>Login</button>
  //   </div>
  // );

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulating a login request
    setTimeout(() => {
      setLoading(false);
      const { username, password } = values;
      if (!(values.username === 'admin') || !(values.password === '20082023')) {
        setError(true);
        return;
      } else {
        dispatch(
          setUser({ user: { username, password }, isAuthenticated: true })
        );
        navigate('/');
      }
    }, 500);
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
          validateStatus={error ? 'error' : undefined}
          help={error ? 'wrong login or passwor' : undefined}
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
          validateStatus={error ? 'error' : undefined}
          help={error ? 'wrong login or passwor' : undefined}
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
          <Button type='primary' htmlType='submit' loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default Login;
