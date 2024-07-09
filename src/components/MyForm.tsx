import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@material-ui/core';
import ControlledInput from './ControlledInput';
import { schema, FormData } from '../types/schema';

function MyForm() {
  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
} = useForm<FormData>({
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.table(data);
  };

  const schemaFields = Object.keys(schema.shape) as Array<keyof FormData>;

  return (
    <form 
        onSubmit={handleSubmit(onSubmit)} 
        style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: 400, 
            width: 250, 
            margin: '50px auto 0'
        }}>
        {schemaFields.map((field) => (
            <ControlledInput
                key={field}
                name={field}
                control={control}
                defaultValue=""
                label={field}
                error={errors[field]?.message}
            />
        ))}
        <Button type="submit" variant='contained'>Submit</Button>
    </form>
  );
}

export default MyForm;