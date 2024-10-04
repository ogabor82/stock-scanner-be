-- CreateTable
CREATE TABLE "SymbolOverview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "CIK" TEXT,
    "exchange" TEXT,
    "currency" TEXT,
    "country" TEXT,
    "sector" TEXT,
    "industry" TEXT,
    "address" TEXT,
    "PERatio" REAL,
    "priceToSalesRatioTTM" REAL,
    "dividendYield" REAL
);
