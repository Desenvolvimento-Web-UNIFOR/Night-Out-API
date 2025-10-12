import { Router } from 'express';
import {
    criarPropostaCasa,
    listarPropostaCasa,
    buscarPropostaCasaPorId,
    editarPropostaCasa,
} from "../../controller/proposta_casa/propostaCasaLCController";

const PropostaCasaRoutes = Router();

PropostaCasaRoutes.post("/", criarPropostaCasa);
PropostaCasaRoutes.get("/", listarPropostaCasa);
PropostaCasaRoutes.get("/:id", buscarPropostaCasaPorId);
PropostaCasaRoutes.put("/:id", editarPropostaCasa);

export default PropostaCasaRoutes;