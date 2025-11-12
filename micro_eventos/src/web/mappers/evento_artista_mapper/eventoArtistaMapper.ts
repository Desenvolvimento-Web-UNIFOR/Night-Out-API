
import { EventoArtista } from "../../../core/generated/prisma";
import { EventoArtistaDTO } from "../../types/evento_artista_dtos/eventoArtistaDTO";

export async function toForm(
  eventoArtista: EventoArtista
): Promise<Partial<EventoArtistaDTO>> {
  return {
    id_evento: eventoArtista.id_evento,
    id_usuario: eventoArtista.id_usuario,
    funcao: eventoArtista.funcao,
    contrato_acordado: eventoArtista.contrato_acordado,
    cache_final: eventoArtista.cache_final,
    evento: [],
  };
}
export async function toModel(
  eventoArtistaDTO: EventoArtistaDTO
): Promise<Partial<EventoArtista>> {
  return {
    id_evento: eventoArtistaDTO.id_evento,
    id_usuario: eventoArtistaDTO.id_usuario,
    funcao: eventoArtistaDTO.funcao,
    contrato_acordado: eventoArtistaDTO.contrato_acordado,
    cache_final: eventoArtistaDTO.cache_final,
  };
}
