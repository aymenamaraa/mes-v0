// Logout.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/authSlice';
import { removeMachines } from '../../redux/machinesSlice';
import { Button } from 'antd';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(removeMachines());
    dispatch(logoutUser());
  };

  return (
    <Button onClick={handleLogout}  style={{marginTop:15}}  danger>
      Logout
    </Button>
  );
};

export default Logout;
