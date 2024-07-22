import { db } from "@/lib/db";

export const createUser = async (username: string, email: string, hashedPassword: string) => {
    try {
        const user = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })
        return user;
    } catch {
        return null;
    }
} 