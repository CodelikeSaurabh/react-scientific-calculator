/**
 * Mathematical constants used throughout the calculator
 * @author Saurabh Kashyap
 * @version 1.0.0
 */

// Mathematical constants
export const MATH_CONSTANTS = {
  PI: Math.PI,
  E: Math.E,
  GOLDEN_RATIO: (1 + Math.sqrt(5)) / 2,
  EULER_MASCHERONI: 0.5772156649015329,
  LN2: Math.LN2,
  LN10: Math.LN10,
  LOG2E: Math.LOG2E,
  LOG10E: Math.LOG10E,
  SQRT1_2: Math.SQRT1_2,
  SQRT2: Math.SQRT2
};

// Display formatting constants
export const DISPLAY_CONFIG = {
  MAX_DISPLAY_LENGTH: 14,
  MAX_DECIMAL_PLACES: 10,
  SCIENTIFIC_NOTATION_THRESHOLD: 1e14,
  SCIENTIFIC_NOTATION_MIN_THRESHOLD: 1e-6
};

// Calculator operation types
export const OPERATION_TYPES = {
  BASIC: 'basic',
  SCIENTIFIC: 'scientific',
  MEMORY: 'memory',
  UTILITY: 'utility'
};

// Key codes for keyboard navigation
export const KEY_CODES = {
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
  EQUALS: '=',
  DECIMAL: '.',
  NUMBERS: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
};

// Error messages
export const ERROR_MESSAGES = {
  DIVISION_BY_ZERO: 'Cannot divide by zero',
  INVALID_INPUT: 'Invalid input',
  MATH_ERROR: 'Math error',
  OVERFLOW: 'Overflow error',
  DOMAIN_ERROR: 'Domain error',
  FACTORIAL_NEGATIVE: 'Factorial of negative numbers is undefined',
  FACTORIAL_TOO_LARGE: 'Factorial result is too large'
};

// Button configuration
export const BUTTON_TYPES = {
  NUMBER: 'number',
  OPERATOR: 'operator',
  FUNCTION: 'function',
  SCIENTIFIC: 'scientific',
  MEMORY: 'memory',
  UTILITY: 'utility',
  CLEAR: 'clear'
};

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  BUTTON_PRESS: 150,
  DISPLAY_UPDATE: 200,
  ERROR_FLASH: 500,
  MODE_TRANSITION: 300
};

// Color scheme
export const COLORS = {
  PRIMARY_GRADIENT: ['#667eea', '#764ba2'],
  SECONDARY_GRADIENT: ['#f093fb', '#f5576c'],
  ACCENT_GRADIENT: ['#4facfe', '#00f2fe'],
  SUCCESS: '#4CAF50',
  WARNING: '#FF9800',
  ERROR: '#F44336',
  INFO: '#2196F3'
};