import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class DividendService {
  async findDividendsbySymbols(symbols: string[]) {
    return prisma.dividend.findMany({
      where: {
        symbol: {
          in: symbols,
        },
      },
    });
  }

  async findDividendsbySymbol(data: { symbol: string }) {
    return prisma.dividend.findMany({
      where: {
        symbol: data.symbol,
      },
      orderBy: {
        exDividendDate: 'asc',
      },
    });
  }

  async create(data: {
    symbol: string;
    exDividendDate: string;
    declarationDate: string;
    recordDate: string;
    paymentDate: string;
    amount: string;
  }) {
    return prisma.dividend.create({
      data: {
        symbol: data.symbol,
        exDividendDate: data.exDividendDate,
        declarationDate: data.declarationDate,
        recordDate: data.recordDate,
        paymentDate: data.paymentDate,
        amount: data.amount,
      },
    });
  }
}
