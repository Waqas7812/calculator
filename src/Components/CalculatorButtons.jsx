import React from 'react';

function CalculatorButtons({ handleClick, calculateResult, clearDisplay }) {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="buttons">
      {buttons.map((button, index) => (
        <button key={index} onClick={() => {
          if (button === '=') {
            calculateResult();
          } else if (button === 'C') {
            clearDisplay();
          } else {
            handleClick(button);
          }
        }}>{button}</button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
