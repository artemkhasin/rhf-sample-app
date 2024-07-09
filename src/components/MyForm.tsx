import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { schema, FormData } from '../types/schema';
import AdditionalInfo from './AdditionalInfo';
import MainInfo from './MainInfo';

function MyForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;


  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.table(data);
  };

  const handleClicked = () => {
    handleSubmit(onSubmit)();
  };

  return (
        <FormProvider {...methods}>
            <Stack spacing={3} width={300} margin='auto' marginTop={5} direction='column'>
                <MainInfo />
                <AdditionalInfo />
                <Button type="submit" variant='contained' onClick={handleClicked}>Submit</Button>
            </Stack>
        </FormProvider>

  );
}

export default MyForm;