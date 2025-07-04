-- CreateEnum
CREATE TYPE "PassengerType" AS ENUM ('PASSAGEIRO', 'TRIPULANTE');

-- CreateTable
CREATE TABLE "duvs" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "travel_date" TIMESTAMP(3) NOT NULL,
    "vessel_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "duvs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vessels" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vessels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passengers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "type" "PassengerType" NOT NULL,
    "sid_document" TEXT,
    "duv_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "passengers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "duvs_number_key" ON "duvs"("number");

-- AddForeignKey
ALTER TABLE "duvs" ADD CONSTRAINT "duvs_vessel_id_fkey" FOREIGN KEY ("vessel_id") REFERENCES "vessels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_duv_id_fkey" FOREIGN KEY ("duv_id") REFERENCES "duvs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
