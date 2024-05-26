import {z} from "zod"

export const contactSchema = z.object({
  name: z.string().min(1, "Title is required.").max(255).optional(),
  email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
  topic: z.string().min(1, "Topic").max(50).optional(),
  message: z.string().min(1, "Message is required").max(65535),
})

