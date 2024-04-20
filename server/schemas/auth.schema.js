import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username required",
  }),
  email: z
    .string({
      required_error: "Email required",
    })
    .email({
      message: "Invalid format",
    }),
  password: z
    .string({
      required_error: "Password required",
    })
    .refine(
      (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
      },
      {
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number",
      }
    ),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z.string({
    required_error: "Password required",
  }),
});
