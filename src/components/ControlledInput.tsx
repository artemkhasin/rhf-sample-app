import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

interface IOwnProps {
  name: string;
  control: Control<any>;
  defaultValue?: string;
  label: string;
  error?: string;
}

const ControlledInput: React.FC<IOwnProps> = ({ 
    name, 
    control, 
    defaultValue, 
    label, 
    error
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={!!error}
          helperText={error || ''}
          variant='outlined'
        />
      )}
    />
  );
};

export default ControlledInput;