import { prisma } from "../../libs/prismaClient";

export async function cadastro(dados: {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  nome_fantasia: string;
  cnpj: string;
  capacidade: string;
  endereco: string;
  bairro: string;
  estado: string;
  cep: string;
  geo_lat: string;
  geo_lng: string;
}): Promise<any> {
  try {
    const novaCasa = await prisma.casaShow.create({
      data: {
        nome_fantasia: dados.nome_fantasia,
        cnpj: dados.cnpj,
        capacidade: dados.capacidade,
        endereco: dados.endereco,
        bairro: dados.bairro,
        estado: dados.estado,
        cep: dados.cep,
        geo_lat: dados.geo_lat,
        geo_lng: dados.geo_lng,
        usuario: {
          create: {
            nome: dados.nome,
            email: dados.email,
            senha_hash: dados.senha,
            telefone: dados.telefone,
            tipo: "CASASHOW",
          },
        },
      },
      include: {
        usuario: true,
      },
    });

    return {
      id: novaCasa.id_usuario,
      nome: novaCasa.usuario.nome,
      email: novaCasa.usuario.email,
      telefone: novaCasa.usuario.telefone,
      nome_fantasia: novaCasa.nome_fantasia,
      capacidade: novaCasa.capacidade,
      cidade: novaCasa.estado,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar casa de show: " + error);
  }
}

export async function login(email: string, senha: string) {
  const casa = await prisma.casaShow.findFirst({
    where: {
      usuario: {
        email,
        senha_hash: senha,
        tipo: "CASASHOW",
      },
    },
    include: {
      usuario: true,
    },
  });

  if (!casa) {
    return null;
  }

  return {
    message: "Casa de show logada com sucesso",
    casa: {
      id: casa.id_usuario,
      nome: casa.usuario.nome,
      email: casa.usuario.email,
      telefone: casa.usuario.telefone,
      nome_fantasia: casa.nome_fantasia,
    },
  };
}
