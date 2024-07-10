import React from 'react';
import { Stack } from '@mui/material';
import ControlledInput from './ControlledInput';
import { useFormContext } from 'react-hook-form';
import { FormData } from '../types/schema';

const MainInfo: React.FC = () => {
    const { control, formState: { errors } } = useFormContext<FormData>();

  return (
    <Stack spacing={3}>
        <ControlledInput 
            name='firstName' 
            control={control}
            label='First Name' 
            error={errors.firstName?.message}
        />
        <ControlledInput 
            name='secondName' 
            control={control}
            label='Second Name' 
            error={errors.secondName?.message}
        />
        <ControlledInput 
            name='email' 
            control={control}
            label='Email' 
            error={errors.email?.message}
        />
        <ControlledInput 
            name='phone' 
            control={control}
            label='Phone' 
            error={errors.phone?.message}
        />
    </Stack>
  )
}

export default MainInfo
