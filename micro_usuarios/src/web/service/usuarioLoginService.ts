import { prisma } from "../libs/prismaClient";

export async function login(name: string, password: string) {
  const message = "Usuario logado com sucesso";

  const user = await prisma.user.findFirst({ where: { name, password } });

  if (!user) {
    return console.log("O usuario não existe ou foi inserido incorretamente");
  }

  return message;
}
