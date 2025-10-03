import { z } from "zod";

export const loteIngressoDTOValidation = z.object({
  id_lote: z.string().min(0),
  id_evento: z.string().min(0),
  nome: z.string().min(3).max(50),
  preco: z.string(),
  quantidade: z.number().min(1),
  qtd_vendida: z.number().min(0),
  data_inicio: z.date(),
  data_fim: z.date(),
  ingresso: z.array(z.any()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type LoteIngressoDTO = z.infer<typeof loteIngressoDTOValidation>;
