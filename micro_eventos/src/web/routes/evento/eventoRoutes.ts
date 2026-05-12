import { Router } from 'express';
import {
    criarEvento,
    listarEvento,
    buscarEventoPorId,
    buscarEventoPorIdCasaShow,
    editarEvento,
    deletarEvento,
} from "../../controller/evento/eventoLCController";
import { protect } from "../../../core/middleware/authMiddleware";

const EventoRoutes = Router();

EventoRoutes.post("/", criarEvento);
EventoRoutes.get("/", listarEvento);
EventoRoutes.get("/casa/:idCasaShow", protect, buscarEventoPorIdCasaShow);
EventoRoutes.get("/:id", buscarEventoPorId);
EventoRoutes.put("/:id", editarEvento);
EventoRoutes.delete("/:id", deletarEvento);

export default EventoRoutes;