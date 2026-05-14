import { Router } from 'express';
import {
    criarPropostaArtista,
    listarPropostaArtista,
    buscarPropostaArtistaPorId,
    buscarPropostaArtistaPorIdCasaShow,
    buscarPropostaArtistaPorIdArtista,
    editarPropostaArtista,
} from "../../controller/proposta_artista/propostaArtistaLCController";
import { protect } from "../../../core/middleware/authMiddleware";

const PropostaArtistaRoutes = Router();

PropostaArtistaRoutes.post("/", criarPropostaArtista);
PropostaArtistaRoutes.get("/", listarPropostaArtista);
PropostaArtistaRoutes.get("/casa/:idCasaShow", protect, buscarPropostaArtistaPorIdCasaShow);
PropostaArtistaRoutes.get("/artista/:idArtista", protect, buscarPropostaArtistaPorIdArtista);
PropostaArtistaRoutes.get("/:id", buscarPropostaArtistaPorId);
PropostaArtistaRoutes.put("/:id", editarPropostaArtista);

export default PropostaArtistaRoutes;