import { z } from "zod";

export const pagamentoIngressoDTOValidation = z.object({
  id_pagamento: z.string().min(0),
  id_ingresso: z.string().min(0),
  metodo: z.string().min(0),
  status: z.string().min(0),
  valor: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PagamentoIngressoDTO = z.infer<
  typeof pagamentoIngressoDTOValidation
>;
