import { z } from "zod";

export const ingressoDTOValidation = z.object({
  id_ingresso: z.string().min(0),
  id_lote: z.string().min(0),
  id_usuario: z.string().min(0),
  codigo_qr: z.string().min(0),
  status: z.string().min(0),
  chekim_em: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type IngressoDTO = z.infer<typeof ingressoDTOValidation>;
