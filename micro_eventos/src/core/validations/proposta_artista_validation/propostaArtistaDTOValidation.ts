import { z } from "zod";

export const propostaArtistaDTOValidation = z.object({
  id_proposta_artista: z.string().min(0),
  id_casa: z.string().min(0),
  id_evento: z.string().min(0),
  data_proposta: z.date(),
  data_evento: z.date(),
  valor_ofertado: z.string(),
  status: z.string().min(0),
  termos: z.string().min(0),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PropostaArtistaDTO = z.infer<typeof propostaArtistaDTOValidation>;
