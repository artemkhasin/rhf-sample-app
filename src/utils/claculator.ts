/**
 * Calculates the result of basic arithmetic operations between two numbers.
 * 
 * @param num1 The first number
 * @param num2 The second number
 * @returns An object containing the results of addition, multiplication, division, and subtraction
 */
export const calculateOperations = (num1: number, num2: number) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
    throw new Error('Invalid input. Please provide valid numbers.');
  }
  if (num2 === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return {
    adding: num1 + num2,
    multiplication: num1 * num2,
    division: num1 / num2,
    subtraction: num1 - num2,
  };
};