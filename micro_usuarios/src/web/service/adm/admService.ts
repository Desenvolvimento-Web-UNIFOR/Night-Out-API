import { prisma } from "../../libs/prismaClient";
import { AdministradorDTO } from "../../types/administrador_dtos/administradorDTO";

function toAdministradorDTO(adm: any) {
  return {
    id: adm.id_usuario,
    nome: adm.usuario.nome,
    email: adm.usuario.email,
    telefone: adm.usuario.telefone,
    cargo: adm.cargo,
    permissao_nivel: adm.permissao_nivel,
    createdAt: adm.usuario.createdAt,
  };
}

export async function login(email: string, senha: string) {
  const administrador = await prisma.administrador.findFirst({
    where: {
      usuario: {
        email,
        senha_hash: senha,
        tipo: "ADMINISTRADOR",
      },
    },
    include: {
      usuario: true,
    },
  });

  if (!administrador) {
    throw new Error("Administrador não encontrado ou credenciais inválidas");
  }

  return {
    message: "Administrador logado com sucesso",
    ...toAdministradorDTO(administrador),
  };
}

export async function criarAdministrador(dados: {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  cargo: string;
  permissao_nivel: string;
}) {
  try {
    const novoAdministrador = await prisma.administrador.create({
      data: {
        cargo: dados.cargo,
        permissao_nivel: dados.permissao_nivel,
        usuario: {
          create: {
            nome: dados.nome,
            email: dados.email,
            senha_hash: dados.senha,
            telefone: dados.telefone,
            tipo: "ADMINISTRADOR",
          },
        },
      },
      include: {
        usuario: true,
      },
    });

    return toAdministradorDTO(novoAdministrador);
  } catch (error) {
    throw new Error(`Erro ao cadastrar administrador: ${(error as Error).message}`);
  }
}

export async function listarAdministradores() {
  const listaAdmins = await prisma.administrador.findMany({
    include: {
      usuario: true,
    },
  });

  return listaAdmins.map(toAdministradorDTO);
}

export async function buscarAdministradorPorId(id: string) {
  const adm = await prisma.administrador.findUnique({
    where: { id_usuario: id },
    include: { usuario: true },
  });

  if (!adm) throw new Error("Administrador não encontrado");

  return toAdministradorDTO(adm);
}

export async function editarADM(id_administrador: string, admDTO: AdministradorDTO) {
  try {
    const admAtualizado = await prisma.administrador.update({
      where: { id_usuario: id_administrador },
      data: {
        cargo: admDTO.cargo,
        permissao_nivel: admDTO.permissao_nivel,
        usuario: {
          update: {
            nome: admDTO.usuario[0].nome,
            email: admDTO.usuario[0].email,
            telefone: admDTO.usuario[0].telefone,
            senha_hash: admDTO.usuario[0].senha_hash,
          },
        },
      },
      include: { usuario: true },
    });

    return toAdministradorDTO(admAtualizado);
  } catch (error) {
    throw new Error(`Erro ao editar administrador: ${(error as Error).message}`);
  }
}

export async function deletarADM(id_administrador: string) {
  try {
    const adm = await prisma.administrador.findUnique({
      where: { id_usuario: id_administrador },
      include: { usuario: true },
    });

    if (!adm) throw new Error("Administrador não encontrado.");

    await prisma.administrador.delete({
      where: { id_usuario: id_administrador },
    });

    return { message: "Administrador deletado com sucesso!" };
  } catch (error) {
    throw new Error(`Erro ao deletar administrador: ${(error as Error).message}`);
  }
}