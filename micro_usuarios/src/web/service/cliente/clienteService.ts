import { prisma } from "../../libs/prismaClient";

export async function cadastro(dados: {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  apelido?: string;
  preferencias?: string;
  data_nascimento?: Date;
}): Promise<any> {
  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        apelido: dados.apelido,
        preferencias: dados.preferencias,
        data_nascimento: dados.data_nascimento,
        usuario: {
          create: {
            nome: dados.nome,
            email: dados.email,
            senha_hash: dados.senha,
            telefone: dados.telefone,
            tipo: "CLIENTE",
          },
        },
      },
      include: {
        usuario: true,
      },
    });

    return {
      id: novoCliente.id_usuario,
      nome: novoCliente.usuario.nome,
      email: novoCliente.usuario.email,
      telefone: novoCliente.usuario.telefone,
      apelido: novoCliente.apelido,
      preferencias: novoCliente.preferencias,
      data_nascimento: novoCliente.data_nascimento,
      createdAt: novoCliente.usuario.createdAt,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar cliente: " + error);
  }
}

export async function login(email: string, senha: string) {
  const cliente = await prisma.cliente.findFirst({
    where: {
      usuario: {
        email,
        senha_hash: senha,
        tipo: "CLIENTE",
      },
    },
    include: {
      usuario: true,
    },
  });

  if (!cliente) {
    return null;
  }

  return {
    message: "Cliente logado com sucesso",
    cliente: {
      id: cliente.id_usuario,
      nome: cliente.usuario.nome,
      email: cliente.usuario.email,
      telefone: cliente.usuario.telefone,
    },
  };
}
