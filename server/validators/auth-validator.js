const { z } = require('zod');

const contactSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim().min(3, { message: "Name must be greater than 3 character" })
        .max(255, { message: "Name is too long" }),

    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid Email Addreess" })
        .trim().min(3, { message: "Email is too shorter" })
        .max(255, { message: "Email is too long" }),

    message: z
        .string({ required_error: "Message is required" })
        .trim(),
});

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid Email Addreess" })
        .trim().min(3, { message: "Email is too shorter" })
        .max(255, { message: "Email is too long" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim().min(8, { message: "Password must be greater than 8 character" })
        .max(15, { message: "Password must not be greater than 15 character" }),

});

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim().min(3, { message: "Name must be greater than 3 character" })
        .max(255, { message: "Name is too long" }),

    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid Email Addreess" })
        .trim().min(3, { message: "Email is too shorter" })
        .max(255, { message: "Email is too long" }),

    phone: z
        .string({ required_error: "Phone Number is required" })
        .trim().min(10, { message: "Phone Number must be of 10 digits" })
        .max(10, { message: "Phone Number must be of 10 digits" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim().min(8, { message: "Password must be greater than 8 character" })
        .max(15, { message: "Password must not be greater than 15 character" }),
});


module.exports = { contactSchema, loginSchema, signupSchema };