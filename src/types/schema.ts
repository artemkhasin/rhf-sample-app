import * as z from 'zod';

// Define the validation schema with Zod
export const schema = z.object({
  firstName: z.string().min(3, "Minimum 3 characters required"),
  secondName: z.string().min(3, "Minimum 3 characters required"),
  email: z.string().email("Invalid email address").optional(),
  phone: z.string().min(7, "Phone number is required").optional(),
  details: z.object({
      address: z.string().min(1, "Address is required").optional(),
      city: z.string().min(1, "City is required").optional(),
      state: z.string().min(1, "State is required").optional(),
      zip: z.number().min(5, "Zip is required").optional(),
    }),
});

export type FormData = z.infer<typeof schema>;

export type StepType = {
    label: string;
    component: React.ReactNode;
};
