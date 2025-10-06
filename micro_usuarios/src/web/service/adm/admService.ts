import { prisma } from "../../libs/prismaClient";
import { AdministradorDTO } from "../../types/administrador_dtos/administradorDTO";

export async function login(email: string, senha: string) {
  const message = "Administrador logado com sucesso";

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
    message,
    id: administrador.id_usuario,
    nome: administrador.usuario.nome,
    email: administrador.usuario.email,
    telefone: administrador.usuario.telefone,
  };
}

export async function cadastro(dados: {
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

    return {
      id: novoAdministrador.id_usuario,
      nome: novoAdministrador.usuario.nome,
      email: novoAdministrador.usuario.email,
      telefone: novoAdministrador.usuario.telefone,
      createdAt: novoAdministrador.usuario.createdAt,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar administrador: " + error);
  }
}

export async function listarAdministradores() {
  const listaAdmins = await prisma.administrador.findMany({
    include: {
      usuario: true,
    },
  });

  return listaAdmins.map((admin) => {
    return {
      id: admin.id_usuario,
      nome: admin.usuario.nome,
      email: admin.usuario.email,
    };
  });
}

export async function buscarAdministradorPorId(id: string) {
  const adm = await prisma.administrador.findUnique({
    where: { id_usuario: id },
  });

  return adm;
}

export async function cadastrarADM(admDTO: AdministradorDTO) {
  const novoADM = await prisma.administrador.create({
    data: {
      cargo: admDTO.cargo,
      permissao_nivel: admDTO.permissao_nivel,
      usuario: {
        create: {
          nome: admDTO.usuario[0].nome,
          email: admDTO.usuario[0].email,
          senha_hash: admDTO.usuario[0].senha_hash,
          telefone: admDTO.usuario[0].telefone,
          tipo: "ADMINISTRADOR",
        },
      },
    },
    include: { usuario: true },
  });

  return novoADM;
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
            senha_hash: admDTO.usuario[0].senha_hash,
            telefone: admDTO.usuario[0].telefone,
          },
        },
      },
      include: { usuario: true },
    });

    return admAtualizado;
  } catch (error) {
    console.error("Erro ao editar administrador:", error);
    throw error;
  }
}

export async function deletarADM(id_administrador: string) {
  try {
    const adm = await prisma.administrador.findUnique({
      where: { id_usuario: id_administrador },
      include: { usuario: true },
    });

    if (!adm) throw new Error("Administrador não encontrado.");

    await prisma.usuario.delete({
      where: { id_usuario: adm.usuario.id_usuario },
    });

    await prisma.administrador.delete({
      where: { id_usuario: id_administrador },
    });

    return { message: "Administrador deletado com sucesso!" };
  } catch (error) {
    console.error("Erro ao deletar administrador:", error);
    throw error;
  }
}

