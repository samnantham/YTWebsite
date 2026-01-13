import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const careerSchema = z.object({
  name: z
    .string()
    .min(2, "Your name is required"),

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

    resume: z
  .any()
  .refine((files) => files?.length === 1, "File is required")
  .refine(
    (files) => files?.[0]?.size <= 5_000_000,
    "Max file size is 5MB"
  ),

  token: z
    .string()
    .min(1, "Captcha verification is required"),
});

export type CareerFormData = z.infer<typeof careerSchema>;
