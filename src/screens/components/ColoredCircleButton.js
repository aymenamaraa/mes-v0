import React from 'react';
import { Button, Popover } from 'antd';

const setMachineState = (machineStatus, stopReason) => {

  if (machineStatus === 1) return { bgColor: '#00FF00', label: 'Running' }; // run
  else {
    if (stopReason === 0) return { bgColor: '#FF0000', label: 'Normal stop' }; // normalStop
    if (stopReason === 1) return { bgColor: '#FF0000', label: 'Settings' }; // settings
    if (stopReason === 2) return { bgColor: '#fa8d2d', label: 'Breakdown' }; // breakdown  orange
    if (stopReason === 3) return { bgColor: '#b5b0b0', label: 'Unplanned' }; // unplanned   gris
    if (stopReason === 4)
      return { bgColor: '#FF0000', label: 'Raw material messing' }; // raw material messing  rouge
    if (stopReason === 5)
      return { bgColor: '#FF0000', label: 'Preventive maintenance' }; // preventive meintenance rouge
    if (stopReason === 6) return { bgColor: '#FF0000', label: 'No quality' }; // no quality rouge
  }
};

const ColoredCircleButton = ({ machineStatus, stopReason }) => {
  const machineState = setMachineState(machineStatus, stopReason);

  const buttonStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: machineState.bgColor,
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
    marginRight: '10px',
  };

  return (
    <Popover title={machineState.label}>
      <Button style={buttonStyle} />
    </Popover>
  );
};

export default ColoredCircleButton;
