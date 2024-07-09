import * as z from 'zod';

// Define the validation schema with Zod
export const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  secondName: z.string().min(1, "Second name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  details: z.object({
      address: z.string().min(1, "Address is required"),
      city: z.string().min(1, "City is required"),
      state: z.string().min(1, "State is required"),
      zip: z.string().min(1, "Zip is required"),
    }),
});

export type FormData = z.infer<typeof schema>;

export type StepType = {
    label: string;
    component: React.ReactNode;
};
