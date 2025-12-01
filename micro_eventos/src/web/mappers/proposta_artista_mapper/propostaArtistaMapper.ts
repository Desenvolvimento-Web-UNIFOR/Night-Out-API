import { PropostaArtistaDTO } from "../../types/proposta_artista_dtos/propostaArtistaDTO";
import { PropostaArtista } from "@prisma/client";

export async function toForm(
  propostaArtista: PropostaArtista
): Promise<Partial<PropostaArtistaDTO>> {
  return {
    id_proposta_artista: propostaArtista.id_proposta_artista,
    id_casa: propostaArtista.id_casa,
    id_evento: propostaArtista.id_evento,
    data_proposta: propostaArtista.data_proposta,
    data_evento: propostaArtista.data_evento,
    valor_ofertado: propostaArtista.valor_ofertado,
    status: propostaArtista.status,
    termos: propostaArtista.termos,
    aceito: propostaArtista.aceito,
    evento: [],
  };
}
export async function toModel(
  propostaArtistaDTO: PropostaArtistaDTO
): Promise<Partial<PropostaArtista>> {
  return {
    id_proposta_artista: propostaArtistaDTO.id_proposta_artista,
    id_casa: propostaArtistaDTO.id_casa,
    id_evento: propostaArtistaDTO.id_evento,
    data_proposta: propostaArtistaDTO.data_proposta,
    data_evento: propostaArtistaDTO.data_evento,
    valor_ofertado: propostaArtistaDTO.valor_ofertado,
    status: propostaArtistaDTO.status,
    termos: propostaArtistaDTO.termos,
    aceito: propostaArtistaDTO.aceito,
  };
}
