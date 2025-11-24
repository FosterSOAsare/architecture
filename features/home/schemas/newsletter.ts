import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.email({ message: "Please enter a valid email address." }),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;
