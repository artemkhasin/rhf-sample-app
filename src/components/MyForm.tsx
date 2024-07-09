import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, Step, StepLabel, Stepper } from '@mui/material';
import { schema, FormData } from '../types/schema';
import AdditionalInfo from './AdditionalInfo';
import MainInfo from './MainInfo';

function MyForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  const steps = ['Main Info', 'Additional Info'];
  const [activeStep, setActiveStep] = React.useState(1);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.table(data);
  };

  const handleClicked = () => {
    if (activeStep < steps.length) {
      setActiveStep((prev) => prev + 1);
    }
    if (activeStep === steps.length - 1) {
        return handleSubmit(onSubmit)();
    }
  };

  return (
        <FormProvider {...methods}>
            <Stack spacing={3} width={300} margin='auto' marginTop={5} direction='column'>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === 1 && <MainInfo />}
                {activeStep === 2 && <AdditionalInfo />}
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
            </Stack>
        </FormProvider>
  );
}

export default MyForm;