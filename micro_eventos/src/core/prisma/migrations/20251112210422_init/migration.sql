-- CreateTable
CREATE TABLE "public"."Evento" (
    "id_evento" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "public"."PropostaCasa" (
    "id_proposta_casa" TEXT NOT NULL,
    "id_artista" TEXT NOT NULL,
    "id_evento" TEXT NOT NULL,
    "data_proposta" TIMESTAMP(3) NOT NULL,
    "data_evento" TIMESTAMP(3) NOT NULL,
    "valor_ofertado" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "termos" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PropostaCasa_pkey" PRIMARY KEY ("id_proposta_casa")
);

-- CreateTable
CREATE TABLE "public"."PropostaArtista" (
    "id_proposta_artista" TEXT NOT NULL,
    "id_casa" TEXT NOT NULL,
    "id_evento" TEXT NOT NULL,
    "data_proposta" TIMESTAMP(3) NOT NULL,
    "data_evento" TIMESTAMP(3) NOT NULL,
    "valor_ofertado" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "termos" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PropostaArtista_pkey" PRIMARY KEY ("id_proposta_artista")
);

-- CreateTable
CREATE TABLE "public"."EventoArtista" (
    "id_evento" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "contrato_acordado" TEXT,
    "cache_final" TEXT,
    "created_final" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventoArtista_pkey" PRIMARY KEY ("id_evento","id_usuario")
);

-- AddForeignKey
ALTER TABLE "public"."PropostaCasa" ADD CONSTRAINT "PropostaCasa_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "public"."Evento"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PropostaArtista" ADD CONSTRAINT "PropostaArtista_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "public"."Evento"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventoArtista" ADD CONSTRAINT "EventoArtista_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "public"."Evento"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;
