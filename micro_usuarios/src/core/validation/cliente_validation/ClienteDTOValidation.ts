import { z } from 'zod'

export const clienteDTOValidation = z.object({
    id_usuario: z.string().min(0),
    apelido: z.string().min(3).max(50),
    preferencias: z.string().min(0),
    data_nascimento: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
})
export type ClienteDTO = z.infer<typeof clienteDTOValidation>;