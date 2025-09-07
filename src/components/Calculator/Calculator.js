/**
 * SIMPLE Scientific Calculator with Expression Display
 * Shows what you're typing + clean working math
 * @author Saurabh Kashyap
 * @version 3.3.0 - WITH EXPRESSION DISPLAY
 */

import React, { useState } from 'react';
import './Calculator.css';

const ScientificCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState(''); // ADDED BACK!
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);
  const [isRadians, setIsRadians] = useState(true);
  const [isSecondFunction, setIsSecondFunction] = useState(false);

  // Input numbers with better expression tracking
  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setExpression(String(num)); // Start new expression
      setWaitingForOperand(false);
    } else {
      const newDisplay = display === '0' ? String(num) : display + num;
      setDisplay(newDisplay);
      // Only update expression if we're building the current number
      if (display === '0') {
        setExpression(prev => prev + num);
      } else {
        setExpression(prev => prev + num);
      }
    }
  };

  // Input decimal with expression tracking
  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setExpression('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setExpression(prev => prev + '.');
    }
  };

  // Clear
  const clear = () => {
    setDisplay('0');
    setExpression(''); // Clear expression
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  // All clear
  const allClear = () => {
    clear();
    setMemory(0);
    setIsSecondFunction(false);
  };

  // Basic math operations with proper error handling
  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+': return firstValue + secondValue;
      case '-': return firstValue - secondValue;
      case '×': return firstValue * secondValue;
      case '÷': 
        if (secondValue === 0) {
          throw new Error('Cannot divide by zero');
        }
        return firstValue / secondValue;
      case 'xʸ': return Math.pow(firstValue, secondValue);
      default: return secondValue;
    }
  };

  // Perform operation with expression building and error handling
  const performOperation = (nextOperation) => {
    try {
      const inputValue = parseFloat(display);

      if (previousValue === null) {
        setPreviousValue(inputValue);
        setExpression(display + ' ' + nextOperation + ' ');
      } else if (operation) {
        const currentValue = previousValue || 0;
        const newValue = calculate(currentValue, inputValue, operation);
        setDisplay(String(newValue));
        setPreviousValue(newValue);
        setExpression(previousValue + ' ' + operation + ' ' + inputValue + ' = ' + newValue);
      }

      setWaitingForOperand(true);
      setOperation(nextOperation);
    } catch (error) {
      setDisplay('Error');
      setExpression('Error: ' + error.message);
    }
  };

  // Equals with proper expression display and error handling
  const handleEquals = () => {
    try {
      const inputValue = parseFloat(display);

      if (previousValue !== null && operation) {
        const newValue = calculate(previousValue, inputValue, operation);
        setDisplay(String(newValue));
        setExpression(previousValue + ' ' + operation + ' ' + inputValue + ' = ' + newValue); // Show complete calculation
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(true);
      }
    } catch (error) {
      setDisplay('Error');
      setExpression('Error: ' + error.message);
      setTimeout(() => {
        setDisplay('0');
        setExpression('');
      }, 2000);
    }
  };

  // Scientific functions with expression tracking and error handling
  const handleScientificFunction = (func) => {
    const value = parseFloat(display);
    let result;

    try {
      // Validate input for functions that require it
      if (['√', 'ln', 'log'].includes(func) && value < 0) {
        throw new Error('Invalid input for ' + func);
      }
      if (func === '1/x' && value === 0) {
        throw new Error('Cannot divide by zero');
      }

      switch (func) {
        case 'sin':
          result = isRadians ? Math.sin(value) : Math.sin(value * Math.PI / 180);
          break;
        case 'cos':
          result = isRadians ? Math.cos(value) : Math.cos(value * Math.PI / 180);
          break;
        case 'tan':
          result = isRadians ? Math.tan(value) : Math.tan(value * Math.PI / 180);
          break;
        case 'ln':
          result = Math.log(value);
          break;
        case 'log':
          result = Math.log10(value);
          break;
        case 'x²':
          result = Math.pow(value, 2);
          break;
        case '√':
          result = Math.sqrt(value);
          break;
        case '1/x':
          result = 1 / value;
          break;
        case 'x!':
          result = factorial(value);
          break;
        case '|x|':
          result = Math.abs(value);
          break;
        case 'exp':
          result = Math.exp(value);
          break;
        case 'π':
          result = Math.PI;
          break;
        case 'e':
          result = Math.E;
          break;
        default:
          result = value;
          break;
      }

      setDisplay(String(result));
      setExpression(func + '(' + value + ') = ' + result); // Show function in expression
      setWaitingForOperand(true);
    } catch (error) {
      setDisplay('Error');
      setExpression('Error: ' + error.message);
      // Auto-clear error after 2 seconds
      setTimeout(() => {
        setDisplay('0');
        setExpression('');
      }, 2000);
    }
  };

  // Simple factorial
  const factorial = (n) => {
    if (n < 0 || n !== Math.floor(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // Utility functions
  const toggleAngleUnit = () => setIsRadians(!isRadians);
  const toggleSecondFunction = () => setIsSecondFunction(!isSecondFunction);
  
  const addParenthesis = (type) => {
    const char = type === 'open' ? '(' : ')';
    setExpression(prev => prev + char);
  };
  
  const toggleSign = () => {
    if (display !== '0') {
      const newDisplay = display.charAt(0) === '-' ? display.slice(1) : '-' + display;
      setDisplay(newDisplay);
    }
  };
  
  const percentage = () => {
    const value = parseFloat(display);
    const result = value / 100;
    setDisplay(String(result));
    setExpression(prev => prev + '% = ' + result);
    setWaitingForOperand(true);
  };

  return (
    <div className="calculator scientific">
      {/* Enhanced Display with Expression */}
      <div className="calculator-display">
        <div className="secondary-display">
          <div className="status-indicators">
            <span className={`angle-unit ${isRadians ? 'active' : ''}`}>
              {isRadians ? 'RAD' : 'DEG'}
            </span>
            <span className={`memory-indicator ${memory !== 0 ? 'active' : ''}`}>
              M
            </span>
            <span className={`second-function ${isSecondFunction ? 'active' : ''}`}>
              2nd
            </span>
          </div>
          {/* EXPRESSION DISPLAY - Shows what you're typing! */}
          {expression && (
            <div className="expression-display">
              {expression}
            </div>
          )}
        </div>
        <div className="display-value">
          {display}
        </div>
      </div>
      
      {/* Simple Grid Layout */}
      <div className="calculator-keypad scientific-keypad">
        
        {/* Row 1 */}
        <button className="calculator-key key-function" onClick={toggleAngleUnit}>
          {isRadians ? 'Rad' : 'Deg'}
        </button>
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('x!')}>
          x!
        </button>
        <button className="calculator-key key-function" onClick={() => addParenthesis('open')}>
          (
        </button>
        <button className="calculator-key key-function" onClick={() => addParenthesis('close')}>
          )
        </button>
        <button className="calculator-key key-function" onClick={percentage}>
          %
        </button>
        <button className="calculator-key key-clear" onClick={allClear}>
          AC
        </button>
        <button className="calculator-key key-scientific" onClick={toggleSecondFunction}>
          Inv
        </button>

        {/* Row 2 */}
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('sin')}>
          sin
        </button>
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('ln')}>
          ln
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(7)}>
          7
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(8)}>
          8
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(9)}>
          9
        </button>
        <button className="calculator-key key-operator" onClick={() => performOperation('÷')}>
          ÷
        </button>
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('π')}>
          π
        </button>

        {/* Row 3 */}
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('cos')}>
          cos
        </button>
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('log')}>
          log
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(4)}>
          4
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(5)}>
          5
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(6)}>
          6
        </button>
        <button className="calculator-key key-operator" onClick={() => performOperation('×')}>
          ×
        </button>
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('e')}>
          e
        </button>

        {/* Row 4 */}
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('tan')}>
          tan
        </button>
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('√')}>
          √
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(1)}>
          1
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(2)}>
          2
        </button>
        <button className="calculator-key key-number" onClick={() => inputNumber(3)}>
          3
        </button>
        <button className="calculator-key key-operator" onClick={() => performOperation('-')}>
          −
        </button>
        <button className="calculator-key key-function" onClick={toggleSign}>
          ±
        </button>

        {/* Row 5 */}
        <button className="calculator-key key-scientific" onClick={() => handleScientificFunction('exp')}>
          EXP
        </button>
        <button className="calculator-key key-scientific" onClick={() => performOperation('xʸ')}>
          x^y
        </button>
        <button className="calculator-key key-number wide" onClick={() => inputNumber(0)}>
          0
        </button>
        <button className="calculator-key key-number" onClick={inputDecimal}>
          .
        </button>
        <button className="calculator-key key-operator" onClick={() => performOperation('+')}>
          +
        </button>
        <button className="calculator-key key-equals" onClick={handleEquals}>
          =
        </button>

      </div>
    </div>
  );
};

export default ScientificCalculator;