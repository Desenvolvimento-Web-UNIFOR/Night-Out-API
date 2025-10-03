import { z } from "zod";

export const eventoArtistaDTOValidation = z.object({
  id_evento: z.string().min(0),
  id_usuario: z.string().min(0),
  funcao: z.string().min(3).max(50),
  contrato_acordado: z.string().min(0),
  cache_final: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type EventoArtistaDTO = z.infer<typeof eventoArtistaDTOValidation>;
