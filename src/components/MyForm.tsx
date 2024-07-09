import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { schema, FormData, StepType } from '../types/schema';
import AdditionalInfo from './AdditionalInfo';
import MainInfo from './MainInfo';
import CustomStepper from './CustomStepper';
import FormButtons from './FormButtons';
import { DevTool } from "@hookform/devtools";

function MyForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  const steps: StepType[] = [
    { 
        label: 'Main Info',
        component: <MainInfo/>,
     }, 
    { 
        label: 'Additional Info',
        component: <AdditionalInfo/>,
     }
];
  const [activeStep, setActiveStep] = React.useState(1);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.table(data);
  };

  const handleClicked = () => {
    if (activeStep < steps.length) {
      setActiveStep((prev) => prev + 1);
    }
    if (activeStep === steps.length) {
        return handleSubmit(onSubmit)();
    }
  };

  const activeComponent = steps[activeStep - 1].component;
  console.log(process.env.NODE_ENV)
  return (
        <FormProvider {...methods}>
            <Stack spacing={3} width={300} margin='auto' marginTop={5} direction='column'>
                <CustomStepper activeStep={activeStep} steps={steps} />
                {activeComponent}
                <FormButtons
                    activeStep={activeStep}
                    handleClicked={handleClicked}
                    setActiveStep={setActiveStep}
                    steps={steps}
                />
            </Stack>
            {
                process.env.NODE_ENV === 'development' && 
                <DevTool control={methods.control} />
            }
        </FormProvider>
  );
}

export default MyForm;