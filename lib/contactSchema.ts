import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Your name is required"),

  company: z
    .string()
    .min(2, "Company name is required"),

  email: z
    .string()
    .email("Enter a valid email address"),

      phone: z
    .string()
    .refine(
      (value) => isValidPhoneNumber(value),
      "Invalid phone number"
    ),

  subject: z
    .string()
    .min(3, "Subject is required"),

  message: z
    .string()
    .min(10, "Comments must be at least 10 characters"),

  token: z
    .string()
    .min(1, "Captcha verification is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
