/**
 * FIXED Math Operations - PROPER EQUATION SOLVING
 * Now handles complex expressions like (2+1) - 2(3*2) correctly
 * @author Saurabh Kashyap
 * @version 3.1.0
 */

import { MATH_CONSTANTS, ERROR_MESSAGES, DISPLAY_CONFIG } from './constants.js';

/**
 * SAFE EXPRESSION EVALUATOR - Handles complex math
 */
export const evaluateExpression = (expression) => {
  try {
    if (!expression || expression.trim() === '') {
      return 0;
    }

    // Clean and prepare expression
    let expr = expression
      .replace(/π/g, Math.PI.toString())
      .replace(/e(?![0-9x])/g, Math.E.toString())
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/\s+/g, ''); // Remove all spaces

    // Handle implicit multiplication patterns
    expr = expr
      .replace(/(\d+|\))\(/g, '$1*(')  // 2( -> 2*(
      .replace(/\)(\d+)/g, ')*$1')     // )2 -> )*2
      .replace(/(\d+)(π|e)/g, '$1*$2') // 2π -> 2*π
      .replace(/(π|e)(\d+)/g, '$1*$2') // π2 -> π*2
      .replace(/(\d+)(sin|cos|tan|ln|log|sqrt)/g, '$1*$2'); // 2sin -> 2*sin

    // Handle mathematical functions
    expr = expr
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')  
      .replace(/tan/g, 'Math.tan')
      .replace(/ln/g, 'Math.log')
      .replace(/log/g, 'Math.log10')
      .replace(/sqrt/g, 'Math.sqrt')
      .replace(/√/g, 'Math.sqrt');

    // Create safe evaluation function
    const safeEval = (expression) => {
      try {
        // Only allow safe mathematical operations
        const allowedChars = /^[0-9+\-*/().\s,Math.sincogtaqrlpe]+$/;
        if (!allowedChars.test(expression)) {
          throw new Error('Invalid characters in expression');
        }
        
        // Use Function constructor for safer evaluation than eval
        return Function('"use strict"; return (' + expression + ')')();
      } catch (error) {
        throw new Error('Invalid mathematical expression');
      }
    };

    const result = safeEval(expr);

    // Validate result
    if (typeof result !== 'number' || !isFinite(result)) {
      throw new Error('Invalid calculation result');
    }

    return result;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.MATH_ERROR);
  }
};

/**
 * Performs basic arithmetic operations
 */
export const performBasicOperation = (firstValue, secondValue, operator) => {
  try {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        if (secondValue === 0) {
          throw new Error(ERROR_MESSAGES.DIVISION_BY_ZERO);
        }
        return firstValue / secondValue;
      case '^':
      case 'xʸ':
        return Math.pow(firstValue, secondValue);
      case 'ʸ√x':
        if (firstValue === 0) {
          throw new Error(ERROR_MESSAGES.DIVISION_BY_ZERO);
        }
        return Math.pow(secondValue, 1 / firstValue);
      case '=':
        return secondValue;
      default:
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
  } catch (error) {
    throw new Error(error.message || ERROR_MESSAGES.MATH_ERROR);
  }
};

/**
 * Performs trigonometric functions
 */
export const performTrigonometricFunction = (value, func, isRadians = true) => {
  try {
    const angle = isRadians ? value : (value * Math.PI) / 180;

    switch (func) {
      case 'sin':
        return Math.sin(angle);
      case 'cos':
        return Math.cos(angle);
      case 'tan':
        return Math.tan(angle);
      case 'asin':
        if (Math.abs(value) > 1) {
          throw new Error(ERROR_MESSAGES.DOMAIN_ERROR);
        }
        return isRadians ? Math.asin(value) : Math.asin(value) * 180 / Math.PI;
      case 'acos':
        if (Math.abs(value) > 1) {
          throw new Error(ERROR_MESSAGES.DOMAIN_ERROR);
        }
        return isRadians ? Math.acos(value) : Math.acos(value) * 180 / Math.PI;
      case 'atan':
        return isRadians ? Math.atan(value) : Math.atan(value) * 180 / Math.PI;
      case 'sinh':
        return Math.sinh(value);
      case 'cosh':
        return Math.cosh(value);
      case 'tanh':
        return Math.tanh(value);
      default:
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
  } catch (error) {
    throw new Error(error.message || ERROR_MESSAGES.MATH_ERROR);
  }
};

/**
 * Performs logarithmic and exponential functions
 */
export const performLogExpFunction = (value, func) => {
  try {
    switch (func) {
      case 'ln':
        if (value <= 0) {
          throw new Error(ERROR_MESSAGES.DOMAIN_ERROR);
        }
        return Math.log(value);
      case 'log':
        if (value <= 0) {
          throw new Error(ERROR_MESSAGES.DOMAIN_ERROR);
        }
        return Math.log10(value);
      case 'log2':
        if (value <= 0) {
          throw new Error(ERROR_MESSAGES.DOMAIN_ERROR);
        }
        return Math.log2(value);
      case 'exp':
        return Math.exp(value);
      case '10^x':
        return Math.pow(10, value);
      case '2^x':
        return Math.pow(2, value);
      default:
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
  } catch (error) {
    throw new Error(error.message || ERROR_MESSAGES.MATH_ERROR);
  }
};

/**
 * Performs power and root functions
 */
export const performPowerRootFunction = (value, func) => {
  try {
    switch (func) {
      case 'x²':
        return Math.pow(value, 2);
      case 'x³':
        return Math.pow(value, 3);
      case '√':
        if (value < 0) {
          throw new Error(ERROR_MESSAGES.DOMAIN_ERROR);
        }
        return Math.sqrt(value);
      case '∛':
        return Math.cbrt(value);
      case '1/x':
        if (value === 0) {
          throw new Error(ERROR_MESSAGES.DIVISION_BY_ZERO);
        }
        return 1 / value;
      default:
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
  } catch (error) {
    throw new Error(error.message || ERROR_MESSAGES.MATH_ERROR);
  }
};

/**
 * Calculates factorial
 */
export const calculateFactorial = (n) => {
  try {
    if (n < 0) {
      throw new Error(ERROR_MESSAGES.FACTORIAL_NEGATIVE);
    }
    
    if (n !== Math.floor(n)) {
      throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
    
    if (n > 170) {
      throw new Error(ERROR_MESSAGES.FACTORIAL_TOO_LARGE);
    }
    
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return result;
  } catch (error) {
    throw new Error(error.message || ERROR_MESSAGES.MATH_ERROR);
  }
};

/**
 * Gets mathematical constants
 */
export const getMathConstant = (constant) => {
  switch (constant) {
    case 'π':
      return MATH_CONSTANTS.PI;
    case 'e':
      return MATH_CONSTANTS.E;
    case 'rand':
      return Math.random();
    default:
      throw new Error(ERROR_MESSAGES.INVALID_INPUT);
  }
};

/**
 * Formats display value
 */
export const formatDisplayValue = (value) => {
  try {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    
    if (isNaN(numValue)) {
      return ERROR_MESSAGES.MATH_ERROR;
    }
    
    if (!isFinite(numValue)) {
      return numValue === Infinity ? '∞' : '-∞';
    }
    
    const absValue = Math.abs(numValue);
    
    // Use scientific notation for very large or very small numbers
    if (absValue >= DISPLAY_CONFIG.SCIENTIFIC_NOTATION_THRESHOLD || 
        (absValue < DISPLAY_CONFIG.SCIENTIFIC_NOTATION_MIN_THRESHOLD && absValue !== 0)) {
      return numValue.toExponential(8);
    }
    
    // Format regular numbers
    let stringValue = numValue.toString();
    if (stringValue.length > DISPLAY_CONFIG.MAX_DISPLAY_LENGTH) {
      // Round to avoid precision issues
      const rounded = Math.round(numValue * 1000000000) / 1000000000;
      stringValue = rounded.toString();
      
      if (stringValue.length > DISPLAY_CONFIG.MAX_DISPLAY_LENGTH) {
        return numValue.toPrecision(10);
      }
    }
    
    return stringValue;
  } catch (error) {
    return ERROR_MESSAGES.MATH_ERROR;
  }
};

/**
 * Validates if input is a valid number
 */
export const isValidNumber = (input) => {
  const number = parseFloat(input);
  return !isNaN(number) && isFinite(number);
};

/**
 * Clamps a value between min and max
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Rounds a number to specified decimal places
 */
export const roundToDecimals = (value, decimals = DISPLAY_CONFIG.MAX_DECIMAL_PLACES) => {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
};