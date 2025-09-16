-- CreateTable
CREATE TABLE "public"."CasaDeShow" (
    "id_usuario" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "capacidade" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "geo_lat" TEXT NOT NULL,
    "geo_lng" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CasaDeShow_pkey" PRIMARY KEY ("id_usuario")
);
