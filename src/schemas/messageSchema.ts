import {z} from 'zod'

export const messageSchema = z.object({
    content : z
    .string()
    .min(10 , {message: "Message should be atleast 10 character long"})
    .max(300 , {message: "Content should not be longer than 300 words"})
}) 