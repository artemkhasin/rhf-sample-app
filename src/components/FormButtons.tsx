import React from 'react';
import { Button, Stack } from '@mui/material';
import { StepType } from '../types/schema';

interface IOwnProps {
    activeStep: number;
    handleClicked: () => void;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    steps: StepType[];
};

const FormButtons = ({activeStep, handleClicked, setActiveStep, steps}: IOwnProps) => {
  return (
    <Stack spacing={2} direction='row' justifyContent='center'>
        {
            activeStep !== 1 && 
            <Button 
                variant='outlined' 
                onClick={()=> setActiveStep(prev => prev - 1)}
                fullWidth
            >
                Back
            </Button>}
        <Button 
            type="submit" 
            variant='contained' 
            onClick={handleClicked}
            fullWidth
        >
            {activeStep === steps.length ? 'Submit' : 'Next'}
        </Button>
    </Stack>
  )
}

export default FormButtons
