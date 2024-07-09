import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { schema, FormData } from '../types/schema';
import ControlledInput from './ControlledInput';

const AdditionalInfo = () => {
  const { control, formState: {errors} } = useFormContext<FormData>();

  const additionalFields = Object.keys(schema.shape.details.shape) as Array<keyof typeof schema.shape.details.shape>;
  return (
    <Stack spacing={2}>
      <Typography variant='h6'>Additional Info</Typography>
      {additionalFields.map((field) => (
        <ControlledInput
          key={field}
          name={`details.${field}`}
          control={control}
          defaultValue=''
          label={field.toUpperCase()}
          error={errors.details?.[field]?.message}
        />
      ))}
    </Stack>
  )
}

export default AdditionalInfo