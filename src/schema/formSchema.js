import { z } from "zod";

export const formSchema = z
  .object({
    // Step 1
    fullName: z
      .string()
      .min(3, "Full name must be at least 3 characters")
      .max(40, "Full name must not exceed 40 characters"),

    employeeId: z
      .string()
      .regex(/^EMP\d+$/, "Employee ID should be like EMP1024"),

    department: z
      .string()
      .min(1, "Please select a department"),

    // Step 2
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email"),

    subscriptionPlan: z
      .string()
      .min(1, "Please select a subscription plan"),

    billingCycle: z
      .string()
      .min(1, "Please select a billing cycle"),

    // Step 3
    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
