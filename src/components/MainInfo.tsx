import React from 'react';
import { Stack, Typography } from '@mui/material';
import ControlledInput from './ControlledInput';
import { useFormContext } from 'react-hook-form';
import { FormData } from '../types/schema';

const MainInfo = () => {
    const { control, formState: { errors } } = useFormContext<FormData>();

  return (
    <Stack spacing={3}>
        <Typography variant='h6'>Main Info</Typography>
        <ControlledInput 
            name='firstName' 
            control={control} 
            defaultValue='' 
            label='First Name' 
            error={errors.firstName?.message}
        />
        <ControlledInput 
            name='secondName' 
            control={control} 
            defaultValue='' 
            label='Second Name' 
            error={errors.secondName?.message}
        />
        <ControlledInput 
            name='email' 
            control={control} 
            defaultValue='' 
            label='Email' 
            error={errors.email?.message}
        />
        <ControlledInput 
            name='phone' 
            control={control} 
            defaultValue='' 
            label='Phone' 
            error={errors.phone?.message}
        />
    </Stack>
  )
}

export default MainInfo
