import express from "express";
import ingressoRoutes from "./web/routes/ingresso/ingressoRoutes";
import loteIngressoRoutes from "./web/routes/lote_ingresso/loteIngressoRoutes";
import pagamentoIngressoRoutes from "./web/routes/pagamento_ingresso/pagamentoIngressoRoutes";
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use("/ingresso", ingressoRoutes);
app.use("/loteIngresso", loteIngressoRoutes);
app.use("/pagamentoIngresso", pagamentoIngressoRoutes);

const PORT = 3001;


app.listen(PORT, () => {
  console.log(`Microserviço de Ingressos rodando na porta ${PORT}`);
});
