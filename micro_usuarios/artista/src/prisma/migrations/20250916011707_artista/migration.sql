-- CreateTable
CREATE TABLE "public"."Artista" (
    "id_usuario" TEXT NOT NULL,
    "nome_artistico" TEXT NOT NULL,
    "genero_musical" TEXT NOT NULL,
    "cache_min" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "url_portfolio" TEXT NOT NULL,
    "verificado" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id_usuario")
);
