"use client"

import * as z  from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan"
    }),
    password: z.string().min(1, {
        message: "Password dibutuhkan"
    }),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan!"
    }),
    password: z.string().min(6, {
        message: "Password yang dibutuhkan minimal 6 karakter!"
    }),
    username: z.string().min(1, {
        message: "Username dibutuhkan!"
    })
})