-- CreateTable
CREATE TABLE "Dividend" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "symbol" TEXT NOT NULL,
    "exDividendDate" TEXT NOT NULL,
    "declarationDate" TEXT NOT NULL,
    "recordDate" TEXT NOT NULL,
    "paymentDate" TEXT NOT NULL,
    "amount" TEXT NOT NULL
);
