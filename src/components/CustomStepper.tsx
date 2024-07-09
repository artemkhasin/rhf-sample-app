import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { StepType } from '../types/schema';

interface IOwnProps {
    activeStep: number;
    steps: StepType[];
};

const CustomStepper = ({activeStep, steps}: IOwnProps) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
            <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
            </Step>
        ))}
    </Stepper>
  )
}

export default CustomStepper
