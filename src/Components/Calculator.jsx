/* eslint-disable no-eval */
import React, { useState } from 'react';
import './Calculator.css';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';

function Calculator() {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (display === '0' || display === 'Error') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  return (
    <div className="calculator">
      <CalculatorDisplay display={display} />
      <CalculatorButtons
        handleClick={handleClick}
        calculateResult={calculateResult}
        clearDisplay={clearDisplay}
      />
    </div>
  );
}

export default Calculator;
