import * as z from 'zod';

// Define the validation schema with Zod
export const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  secondName: z.string().min(1, "Second name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
});

export type FormData = z.infer<typeof schema>;
