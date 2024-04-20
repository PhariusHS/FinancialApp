import {z} from 'zod'

export const spentSchema = z.object({
    name: z.string({
        required_error: "Name is required"
    }).max(24, {message: "The name must not exceed 24 characters"}),
    price: z.string({
        required_error: "Price is required"
    }),
    type:z.string({
        required_error:"Type is required"
    }),
    description: z.string({
        required_error: "Description is required"
    }).max(80,{message: "The description must not exceed 80 characters"} ).optional(),
    date: z.string().datetime().optional()
})