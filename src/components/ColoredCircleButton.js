import React from 'react';

const ColoredCircleButton = ({ color, onClick }) => {
  const buttonStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: color,
    border: 'none',
    cursor: 'pointer',
    marginLeft:'10px',
    marginRight:'10px',
  };

  return <button style={buttonStyle} onClick={onClick} />;
};

export default ColoredCircleButton;
