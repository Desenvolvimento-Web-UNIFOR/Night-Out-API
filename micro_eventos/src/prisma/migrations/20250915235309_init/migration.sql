/*
  Warnings:

  - The primary key for the `Eventos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Eventos` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Eventos` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_fim` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_inicio` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_casa` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - The required column `id_evento` was added to the `Eventos` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idade_minima` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visibilidade` to the `Eventos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Eventos" DROP CONSTRAINT "Eventos_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "data_fim" TEXT NOT NULL,
ADD COLUMN     "data_inicio" TEXT NOT NULL,
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "id_casa" TEXT NOT NULL,
ADD COLUMN     "id_evento" TEXT NOT NULL,
ADD COLUMN     "idade_minima" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL,
ADD COLUMN     "visibilidade" TEXT NOT NULL,
ADD CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id_evento");
