/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../components/Calculator"; // Adjust the import path as necessary

describe("Calculator Component", () => {
  test("test_display_error_when_numbers_not_provided", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Please enter valid numbers")).toBeInTheDocument();
  });

  test("test_display_error_when_num1_out_of_range", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByLabelText("First Number (1-50):"), { target: { value: "0" } });
    fireEvent.change(screen.getByLabelText("Second Number (25-500):"), { target: { value: "100" } });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Number must be between 1 and 50")).toBeInTheDocument();
  });

  test("test_display_results_for_valid_numbers", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByLabelText("First Number (1-50):"), { target: { value: "10" } });
    fireEvent.change(screen.getByLabelText("Second Number (25-500):"), { target: { value: "50" } });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Results:")).toBeInTheDocument();
    expect(screen.getByText("Adding: 60")).toBeInTheDocument();
    expect(screen.getByText("Multiplication: 500")).toBeInTheDocument();
    expect(screen.getByText("Division: 0.2")).toBeInTheDocument();
    expect(screen.getByText("Subtraction: -40")).toBeInTheDocument();
  });

  test('displays error message for invalid input', () => {
    const { getByText, getByLabelText } = render(<Calculator />);

    const firstInput = getByLabelText('First Number (1-50):');
    const secondInput = getByLabelText('Second Number (25-500):');
    const calculateButton = getByText('Calculate');

    fireEvent.change(firstInput, { target: { value: '60' } });
    fireEvent.change(secondInput, { target: { value: '20' } });
    fireEvent.click(calculateButton);

    expect(getByText(/Number must be between 1 and 50/)).toBeInTheDocument();
  });

  test('performs calculation correctly', () => {
    const { getByText, getByLabelText } = render(<Calculator />);

    const firstInput = getByLabelText('First Number (1-50):');
    const secondInput = getByLabelText('Second Number (25-500):');
    const calculateButton = getByText('Calculate');

    fireEvent.change(firstInput, { target: { value: '10' } });
    fireEvent.change(secondInput, { target: { value: '50' } });
    fireEvent.click(calculateButton);

    expect(getByText('Adding: 60')).toBeInTheDocument();
    expect(getByText('Multiplication: 500')).toBeInTheDocument();
    expect(getByText('Division: 0.2')).toBeInTheDocument();
    expect(getByText('Subtraction: -40')).toBeInTheDocument();
  });
});