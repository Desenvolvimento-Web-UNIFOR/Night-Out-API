import { prisma } from "../../libs/prismaClient";

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
