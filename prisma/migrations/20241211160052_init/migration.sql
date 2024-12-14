-- CreateTable
CREATE TABLE "data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "suhu" TEXT NOT NULL,
    "kelembapan" TEXT NOT NULL,
    "timeStamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cahaya" TEXT NOT NULL,
    "phTanah" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
