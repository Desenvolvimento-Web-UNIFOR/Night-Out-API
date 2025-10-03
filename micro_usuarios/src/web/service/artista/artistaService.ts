import { prisma } from "../../libs/prismaClient";

export async function cadastro(dados: {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  nome_artista: string;
  genero_musical: string;
  cache_min: string;
  descricao?: string;
  portifolio?: string;
}): Promise<any> {
  try {
    const novoArtista = await prisma.artista.create({
      data: {
        nome_artista: dados.nome_artista,
        genero_musical: dados.genero_musical,
        cache_min: dados.cache_min,
        descricao: dados.descricao,
        portifolio: dados.portifolio,
        usuario: {
          create: {
            nome: dados.nome,
            email: dados.email,
            senha_hash: dados.senha,
            telefone: dados.telefone,
            tipo: "ARTISTA",
          },
        },
      },
      include: {
        usuario: true,
      },
    });

    return {
      id: novoArtista.id_usuario,
      nome: novoArtista.usuario.nome,
      email: novoArtista.usuario.email,
      telefone: novoArtista.usuario.telefone,
      nome_artista: novoArtista.nome_artista,
      genero_musical: novoArtista.genero_musical,
      descricao: novoArtista.descricao,
      portifolio: novoArtista.portifolio,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar artista: " + error);
  }
}

export async function login(email: string, senha: string) {
  const artista = await prisma.artista.findFirst({
    where: {
      usuario: {
        email,
        senha_hash: senha,
        tipo: "ARTISTA",
      },
    },
    include: {
      usuario: true,
    },
  });

  if (!artista) {
    return null;
  }

  return {
    message: "Artista logado com sucesso",
    artista: {
      id: artista.id_usuario,
      nome: artista.usuario.nome,
      email: artista.usuario.email,
      telefone: artista.usuario.telefone,
      nome_artista: artista.nome_artista,
    },
  };
}
