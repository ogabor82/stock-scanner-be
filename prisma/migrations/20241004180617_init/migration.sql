-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SymbolOverview" (
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
    "PERatio" TEXT,
    "priceToSalesRatioTTM" TEXT,
    "dividendYield" TEXT
);
INSERT INTO "new_SymbolOverview" ("CIK", "PERatio", "address", "country", "currency", "dateUpdated", "description", "dividendYield", "exchange", "id", "industry", "name", "priceToSalesRatioTTM", "sector", "symbol") SELECT "CIK", "PERatio", "address", "country", "currency", "dateUpdated", "description", "dividendYield", "exchange", "id", "industry", "name", "priceToSalesRatioTTM", "sector", "symbol" FROM "SymbolOverview";
DROP TABLE "SymbolOverview";
ALTER TABLE "new_SymbolOverview" RENAME TO "SymbolOverview";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
