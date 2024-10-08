import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class SymbolService {
  async findMany(symbols: string[]) {
    return prisma.symbolOverview.findMany({
      where: {
        symbol: {
          in: symbols,
        },
      },
    });
  }

  async findOne(data: { symbol: string }) {
    return prisma.symbolOverview.findFirst({
      where: {
        symbol: data.symbol,
      },
    });
  }

  async create(data: {
    symbol: string;
    name: string;
    description: string;
    CIK: string;
    exchange: string;
    currency: string;
    country: string;
    sector: string;
    industry: string;
    address: string;
    PERatio: string;
    priceToSalesRatioTTM: string;
    dividendPerShare: string;
    dividendYield: string;
    dividendDate: string;
    exDividendDate: string;
    marketCapitalization: string;
    EPS: string;
    analystTargetPrice: string;
    analystRatingStrongBuy: string;
    analystRatingBuy: string;
    analystRatingHold: string;
    analystRatingSell: string;
    analystRatingStrongSell: string;
  }) {
    return prisma.symbolOverview.create({
      data: {
        symbol: data.symbol,
        name: data.name,
        description: data.description,
        CIK: data.CIK,
        exchange: data.exchange,
        currency: data.currency,
        country: data.country,
        sector: data.sector,
        industry: data.industry,
        address: data.address,
        PERatio: data.PERatio,
        priceToSalesRatioTTM: data.priceToSalesRatioTTM,
        dividendPerShare: data.dividendPerShare,
        dividendYield: data.dividendYield,
        dividendDate: data.dividendDate,
        exDividendDate: data.exDividendDate,
        marketCapitalization: data.marketCapitalization,
        EPS: data.EPS,
        analystTargetPrice: data.analystTargetPrice,
        analystRatingStrongBuy: data.analystRatingStrongBuy,
        analystRatingBuy: data.analystRatingBuy,
        analystRatingHold: data.analystRatingHold,
        analystRatingSell: data.analystRatingSell,
        analystRatingStrongSell: data.analystRatingStrongSell,
      },
    });
  }
}
