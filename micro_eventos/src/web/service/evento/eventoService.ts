import { prisma } from "../../libs/prismClient";
import { EventoDTO } from "../../types/evento_dtos/eventoDTO";

export async function criarEvento(dados: EventoDTO) {
    const novoEvento = await prisma.evento.create({
        data: {
            id_evento: dados.id_evento,
            id_usuario: dados.id_usuario,
            titulo: dados.titulo,
            descricao: dados.descricao,
            data_inicio: dados.data_inicio,
            data_fim: dados.data_fim,
            local: dados.local,
            status: dados.status ?? "DISPONÍVEL",
            propostasCasa: {
                create: dados.propostasCasa?.map((e) => ({
                    id_proposta_casa: e.id_proposta_casa,
                    id_artista: e.id_artista,
                    id_evento: e.id_evento,
                    data_proposta: e.data_proposta,
                    data_evento: e.data_evento,
                    valor_ofertado: e.valor_ofertado,
                    status: e.status ?? "DISPONÍVEL",
                    termos: e.termos,
                })),
            },
            propostasArtista: {
                create: dados.propostasArtista?.map((e) => ({
                    id_proposta_artista: e.id_proposta_artista,
                    id_casa: e.id_casa,
                    id_evento: e.id_evento,
                    data_proposta: e.data_proposta,
                    data_evento: e.data_evento,
                    valor_ofertado: e.valor_ofertado,
                    status: e.status ?? "DISPONÍVEL",
                    termos: e.termos,
                })),
            },
            eventoArtistas: {
                create: dados.eventoArtistas?.map((e) => ({
                    id_evento: e.id_evento,
                    id_usuario: e.id_usuario,
                    funcao: e.funcao,
                    contrato_acordado: e.contrato_acordado,
                    cache_final: e.cache_final,
                    created_final: e.created_final,
                })),
            },
        },
    });

    return {
        message: "Evento criado com sucesso",
        evento: novoEvento,
    };
}

export async function listarEvento() {
    const eventos = await prisma.evento.findMany({});

    return eventos.map((e: any) => ({
        id_evento: e.id_evento,
        id_usuario: e.id_usuario,
        titulo: e.titulo,
        descricao: e.descricao,
        data_inicio: e.data_inicio,
        data_fim: e.data_fim,
        local: e.local,
    }));
}

export async function buscarEventoPorId(id: string) {
    const evento = await prisma.evento.findUnique({
        where: { id_evento: id },
    });

    if(!evento) {
        return null;
    }

    return evento;
}

export async function atualizarEvento(id: string, dados: Partial<EventoDTO>) {
    const eventoExistente = await prisma.evento.findUnique({
        where: { id_evento: id },
    });

    if(!eventoExistente) {
        throw new Error("Evento não encontrado");
    }

    const eventoAtualizado = await prisma.evento.update({
        where: { id_evento: id },
        data: {
            id_evento: dados.id_evento ?? eventoExistente.id_evento,
            id_usuario: dados.id_usuario ?? eventoExistente.id_usuario,
            titulo: dados.titulo ?? eventoExistente.titulo,
            descricao: dados.descricao ?? eventoExistente.descricao,
            data_inicio: dados.data_inicio ?? eventoExistente.data_inicio,
            data_fim: dados.data_fim ?? eventoExistente.data_fim,
            local: dados.local ?? eventoExistente.local,
            status: dados.status ?? eventoExistente.status,
        },
    });

    return {
        message: "Evento atualizado com sucesso",
        evento: eventoAtualizado
    };
}

export async function deletarEvento(id: string) {
    if(!id) {
        throw new Error("ID do evento é obrigatório para deletar");
    }

    const evento = await prisma.evento.findUnique({
        where: { id_evento: id },
    });

    if(!evento) {
        throw new Error("Evento não encontrado");
    }

    await prisma.evento.delete({
        where: { id_evento: id },
    });

    return {
        message: "Evento deletado com sucesso"
    };
}