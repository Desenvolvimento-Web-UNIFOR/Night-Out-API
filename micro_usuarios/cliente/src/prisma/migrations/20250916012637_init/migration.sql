-- CreateTable
CREATE TABLE "public"."Cliente" (
    "id_usuario" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "preferencias" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_usuario")
);
