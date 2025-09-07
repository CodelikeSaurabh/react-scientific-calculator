/**
 * FIXED useCalculator Hook - PROPER EQUATION EVALUATION
 * Now correctly handles complex expressions like (2+1) - 2(3*2) = -9
 * @author Saurabh Kashyap  
 * @version 3.1.0
 */

import { useState, useCallback, useEffect } from 'react';
import {
  evaluateExpression,
  performBasicOperation,
  performTrigonometricFunction,
  performLogExpFunction,
  performPowerRootFunction,
  calculateFactorial,
  getMathConstant,
  formatDisplayValue,
  isValidNumber
} from '../utils/mathOperations.js';
import { ERROR_MESSAGES } from '../utils/constants.js';

export const useCalculator = () => {
  // Calculator state
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);
  const [isRadians, setIsRadians] = useState(true);
  const [isSecondFunction, setIsSecondFunction] = useState(false);
  const [history, setHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastAnswer, setLastAnswer] = useState(0);

  /**
   * Input number - builds expression
   */
  const inputNumber = useCallback((num) => {
    try {
      if (waitingForOperand) {
        setDisplay(String(num));
        setExpression(String(num));
        setWaitingForOperand(false);
      } else {
        if (display === '0' || display === 'Error') {
          setDisplay(String(num));
          setExpression(String(num));
        } else {
          setDisplay(display + num);
          setExpression(prev => prev + num);
        }
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(ERROR_MESSAGES.INVALID_INPUT);
    }
  }, [display, waitingForOperand]);

  /**
   * Input decimal point
   */
  const inputDecimal = useCallback(() => {
    try {
      if (waitingForOperand) {
        setDisplay('0.');
        setExpression('0.');
        setWaitingForOperand(false);
      } else if (display.indexOf('.') === -1) {
        setDisplay(display + '.');
        setExpression(prev => prev + '.');
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(ERROR_MESSAGES.INVALID_INPUT);
    }
  }, [display, waitingForOperand]);

  /**
   * Clear current input
   */
  const clear = useCallback(() => {
    setDisplay('0');
    setExpression('');
    setWaitingForOperand(false);
    setErrorMessage('');
  }, []);

  /**
   * All clear - reset everything
   */
  const allClear = useCallback(() => {
    clear();
    setMemory(0);
    setLastAnswer(0);
    setIsSecondFunction(false);
    setHistory([]);
  }, [clear]);

  /**
   * Toggle sign
   */
  const toggleSign = useCallback(() => {
    try {
      if (display !== '0' && display !== 'Error') {
        const newDisplay = display.charAt(0) === '-' ? display.slice(1) : '-' + display;
        setDisplay(newDisplay);
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(ERROR_MESSAGES.INVALID_INPUT);
    }
  }, [display]);

  /**
   * Percentage
   */
  const percentage = useCallback(() => {
    try {
      const value = parseFloat(display);
      if (isValidNumber(display)) {
        const result = value / 100;
        setDisplay(formatDisplayValue(result));
        setWaitingForOperand(true);
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(ERROR_MESSAGES.INVALID_INPUT);
    }
  }, [display]);

  /**
   * FIXED: Perform operations - builds proper expression
   */
  const performOperation = useCallback((operator) => {
    try {
      if (operator === '=') {
        // This is handled by equals() function
        return;
      }

      // Add operator to expression
      const operatorSymbol = operator === 'xʸ' ? '^' : operator;
      setExpression(prev => prev + operatorSymbol);
      setWaitingForOperand(true);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message || ERROR_MESSAGES.MATH_ERROR);
    }
  }, []);

  /**
   * FIXED: Equals - evaluates the complete expression
   */
  const equals = useCallback(() => {
    try {
      if (!expression || expression.trim() === '') {
        return;
      }

      console.log('Evaluating expression:', expression);
      const result = evaluateExpression(expression);
      const formattedResult = formatDisplayValue(result);
      
      console.log('Result:', result, 'Formatted:', formattedResult);
      
      setDisplay(formattedResult);
      setLastAnswer(result);
      setWaitingForOperand(true);
      
      // Add to history
      setHistory(prev => [...prev, {
        expression: expression,
        result: formattedResult,
        timestamp: new Date().toISOString()
      }]);
      
      // Clear expression after calculation
      setExpression('');
      setErrorMessage('');
    } catch (error) {
      console.error('Calculation error:', error);
      setErrorMessage(error.message || ERROR_MESSAGES.MATH_ERROR);
      setDisplay('Error');
    }
  }, [expression]);

  /**
   * Scientific functions
   */
  const performScientificFunction = useCallback((func) => {
    try {
      if (['π', 'e', 'rand'].includes(func)) {
        const result = getMathConstant(func);
        if (waitingForOperand || display === '0') {
          setDisplay(formatDisplayValue(result));
          setExpression(func);
        } else {
          setExpression(prev => prev + func);
        }
        setWaitingForOperand(false);
        return;
      }

      const value = parseFloat(display);
      let result;

      if (['sin', 'cos', 'tan', 'asin', 'acos', 'atan'].includes(func)) {
        result = performTrigonometricFunction(value, func, isRadians);
      } else if (['ln', 'log', 'exp'].includes(func)) {
        result = performLogExpFunction(value, func);
      } else if (['x²', '√', '1/x'].includes(func)) {
        result = performPowerRootFunction(value, func);
      } else if (func === 'x!') {
        result = calculateFactorial(Math.floor(value));
      } else {
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
      }

      const formattedResult = formatDisplayValue(result);
      setDisplay(formattedResult);
      setWaitingForOperand(true);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message || ERROR_MESSAGES.MATH_ERROR);
      setDisplay('Error');
    }
  }, [display, isRadians, waitingForOperand]);

  /**
   * Memory operations
   */
  const handleMemory = useCallback((func) => {
    try {
      const value = parseFloat(display);

      switch (func) {
        case 'MC':
          setMemory(0);
          break;
        case 'MR':
          setDisplay(formatDisplayValue(memory));
          setWaitingForOperand(true);
          break;
        case 'M+':
          if (isValidNumber(display)) {
            setMemory(prev => prev + value);
          }
          break;
        case 'M-':
          if (isValidNumber(display)) {
            setMemory(prev => prev - value);
          }
          break;
        case 'MS':
          if (isValidNumber(display)) {
            setMemory(value);
          }
          break;
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message || ERROR_MESSAGES.MATH_ERROR);
    }
  }, [display, memory]);

  /**
   * Insert parentheses
   */
  const insertParenthesis = useCallback((type) => {
    const char = type === 'open' ? '(' : ')';
    setExpression(prev => prev + char);
    setWaitingForOperand(false);
  }, []);

  /**
   * Insert last answer
   */
  const insertAnswer = useCallback(() => {
    const answerStr = lastAnswer.toString();
    if (waitingForOperand || display === '0') {
      setDisplay(answerStr);
      setExpression(answerStr);
    } else {
      setExpression(prev => prev + answerStr);
    }
    setWaitingForOperand(false);
  }, [lastAnswer, waitingForOperand, display]);

  /**
   * Toggle angle unit
   */
  const toggleAngleUnit = useCallback(() => {
    setIsRadians(prev => !prev);
  }, []);

  /**
   * Toggle second function
   */
  const toggleSecondFunction = useCallback(() => {
    setIsSecondFunction(prev => !prev);
  }, []);

  // Auto-clear errors
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
        if (display === 'Error') {
          setDisplay('0');
          setExpression('');
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, display]);

  return {
    // State
    display,
    expression,
    waitingForOperand,
    memory,
    isRadians,
    isSecondFunction,
    history,
    errorMessage,
    lastAnswer,
    
    // Methods
    inputNumber,
    inputDecimal,
    clear,
    allClear,
    toggleSign,
    percentage,
    performOperation,
    equals,
    performScientificFunction,
    handleMemory,
    toggleAngleUnit,
    toggleSecondFunction,
    insertParenthesis,
    insertAnswer,
    
    // Computed values
    hasMemory: memory !== 0,
    hasError: errorMessage !== '',
    formattedDisplay: formatDisplayValue(display)
  };
};