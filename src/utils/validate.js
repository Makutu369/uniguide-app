import z from "zod";
const schema = z.object({
  email: z
    .string("djkdjdjd")
    .email("invalid email address")
    .nonempty("email is required"),
  password: z
    .string()
    .min(8, "password must contain at least 8 characters")
    .nonempty("password is required"),
});

export { schema };
