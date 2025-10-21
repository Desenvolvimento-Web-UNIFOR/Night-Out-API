import { Router } from 'express';
import {
    criarPropostaArtista,
    listarPropostaArtista,
    buscarPropostaArtistaPorId,
    editarPropostaArtista,
} from "../../controller/proposta_artista/propostaArtistaLCController";

const PropostaArtistaRoutes = Router();

PropostaArtistaRoutes.post("/", criarPropostaArtista);
PropostaArtistaRoutes.get("/", listarPropostaArtista);
PropostaArtistaRoutes.get("/:id", buscarPropostaArtistaPorId);
PropostaArtistaRoutes.put("/:id", editarPropostaArtista);

export default PropostaArtistaRoutes;