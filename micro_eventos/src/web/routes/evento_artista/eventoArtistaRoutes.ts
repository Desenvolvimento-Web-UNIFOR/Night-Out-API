import { Router } from 'express';
import {
    criarEventoArtista,
    listarEventoArtista,
    buscarEventoArtistaProId,
    editarEventoArtista,
} from "../../controller/evento_artista/eventoArtistaLCController";

const EventoArtistaRoutes = Router();

EventoArtistaRoutes.post("/", criarEventoArtista);
EventoArtistaRoutes.get("/", listarEventoArtista);
EventoArtistaRoutes.get("/:id", buscarEventoArtistaProId);
EventoArtistaRoutes.put("/:id", editarEventoArtista);

export default EventoArtistaRoutes;