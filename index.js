// Helper function to calculate the factorial of a non-negative integer
function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      throw new Error("Input must be a non-negative integer");
    }
  
    if (n === 0 || n === 1) {
      return 1;
    }
  
    return n * factorial(n - 1);
  }
  
  // Helper function to calculate the square of a number
  function square(number) {
    if (typeof number !== 'number') {
      throw new Error("Input must be a number");
    }
  
    return number * number;
  }
  
  // Demo using the helper functions
  try {
    const numToFactorial = 5;
    const factorialResult = factorial(numToFactorial);
    console.log(`Factorial of ${numToFactorial}:`, factorialResult);
  
    const numToSquare = 8;
    const squareResult = square(numToSquare);
    console.log(`Square of ${numToSquare}:`, squareResult);
  } catch (error) {
    console.error("Error:", error.message);
  }
  