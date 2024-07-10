import React from 'react';
import { Button, Stack } from '@mui/material';
import { StepType } from '../types/schema';
import { useFormContext } from 'react-hook-form';

interface IOwnProps {
    activeStep: number;
    handleClicked: () => void;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    steps: StepType[];
};

const FormButtons = ({activeStep, handleClicked, setActiveStep, steps}: IOwnProps) => {
    const { formState: { errors } } = useFormContext();
    const isErrors = Object.keys(errors).length > 0;
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
            color={isErrors ? 'error' : 'primary'}
            onClick={handleClicked}
            fullWidth
        >
            {activeStep === steps.length ? 'Submit' : 'Next'}
        </Button>
    </Stack>
  )
}

export default FormButtons
