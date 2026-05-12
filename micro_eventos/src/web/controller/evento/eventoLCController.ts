import type { RequestHandler } from 'express';
import * as eventoService from "../../service/evento/eventoService";
import type { EventoDTO } from "../../types/evento_dtos/eventoDTO";
import type { CustomRequest } from "../../../core/middleware/authMiddleware";

export const criarEvento: RequestHandler = async (req, res) => {
    try {
        const dados: EventoDTO = req.body;

        const novoEvento = await eventoService.criarEvento(dados);

        res.status(201).json(novoEvento);
    } catch (e) {
        res.status(500).json({message: `Erro ao criar evento: ${e}`});
    }
};

export const listarEvento: RequestHandler = async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(pageSize);

    try {
        const lista = await eventoService.listarEvento({
            offset,
            limit: Number(pageSize),
        });
        res.status(200).json(lista);
    } catch (e) {
        res.status(500).json({message: `Erro ao listar eventos: ${e}`})
    }
};

export const buscarEventoPorId: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const evento = await eventoService.buscarEventoPorId(id);

        if(!evento) {
            res.status(404).json({message: "Evento não encontrado"});
            return;
        }

        res.status(200).json(evento);
    } catch (e) {
        res.status(500).json({message: `Erro ao buscar evento: ${e}`});
    }
};

export const editarEvento: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const dados: Partial<EventoDTO> = req.body;

        const eventoAtualizado = await eventoService.atualizarEvento(id, dados);

        res.status(200).json(eventoAtualizado);
    } catch (e) {
        res.status(500).json({message: `Erro ao editar evento: ${e}`});
    }
};

export const deletarEvento: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;

        const resultado = await eventoService.deletarEvento(id);

        res.status(200).json(resultado);
    } catch (e) {
        res.status(500).json({message: `Erro ao deletar evento: ${e}`});
    }
};

export const buscarEventoPorIdCasaShow: RequestHandler = async (req: CustomRequest, res) => {
    try {
        const { idCasaShow } = req.params;

        if (req.user?.id !== idCasaShow) {
            res.status(403).json({ message: "Acesso negado. Token não pertence à Casa de Show informada." });
            return;
        }

        const eventos = await eventoService.buscarEventosPorIdCasaShow(idCasaShow);

        if (!eventos) {
            res.status(404).json({ message: "Nenhum evento encontrado para esta Casa de Show." });
            return;
        }

        res.status(200).json(eventos);
    } catch (e) {
        res.status(500).json({ message: `Erro ao buscar eventos por idCasaShow: ${e}` });
    }
};