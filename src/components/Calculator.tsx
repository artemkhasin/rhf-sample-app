import React, { useState } from "react";
import { calculateOperations } from "../utils/claculator"; // Import the function

type Results = {
  adding: number;
  multiplication: number;
  division: number;
  subtraction: number;
};

const validateNumber = (num: number | null, min: number, max: number): string => {
  if (num === null) return "Please enter valid numbers";
  if (num < min || num > max) return `Number must be between ${min} and ${max}`;
  return "";
};

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    const error1 = validateNumber(num1, 1, 50);
    const error2 = validateNumber(num2, 25, 500);

    if (error1 || error2) {
      setError(error1 || error2);
      return;
    }

    setError("");
    setResults(calculateOperations(num1!, num2!));
  };

  const handleReset = () => {
    setNum1(null);
    setNum2(null);
    setResults(null);
    setError("");
  };

  const inputStyle = {
    color: "green",
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <div>
        <label>
          First Number (1-50):
          <input
            type="number"
            value={num1 !== null ? num1 : ""}
            onChange={(e) => setNum1(Number(e.target.value))}
            min="1"
            max="50"
            style={inputStyle}
          />
        </label>
      </div>
      <div>
        <label>
          Second Number (25-500):
          <input
            type="number"
            value={num2 !== null ? num2 : ""}
            onChange={(e) => setNum2(Number(e.target.value))}
            min="25"
            max="500"
            style={inputStyle}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {results && (
        <div>
          <h2>Results:</h2>
          <p>Adding: {results.adding}</p>
          <p>Multiplication: {results.multiplication}</p>
          <p>Division: {results.division}</p>
          <p>Subtraction: {results.subtraction}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;