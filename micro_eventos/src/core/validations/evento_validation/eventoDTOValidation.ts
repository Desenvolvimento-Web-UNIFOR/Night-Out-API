import { z } from "zod";

export const eventoDTOValidation = z.object({
  id_evento: z.string().min(0),
  id_casa: z.string().min(0),
  titulo: z.string().min(3).max(100),
  descricao: z.string().min(10).max(500),
  data_inicio: z.date(),
  data_fim: z.date(),
  local: z.string().min(5).max(100),
  status: z.string().min(0),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type EventoDTO = z.infer<typeof eventoDTOValidation>;
