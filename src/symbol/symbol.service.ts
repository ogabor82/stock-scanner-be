import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class SymbolService {
  async findMany() {
    return prisma.symbolOverview.findMany();
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
    PERatio: number;
    priceToSalesRatioTTM: number;
    dividendYield: number;
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
        dividendYield: data.dividendYield,
      },
    });
  }
}
