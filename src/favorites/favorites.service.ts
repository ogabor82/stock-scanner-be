import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class FavoritesService {
  async findMany(data: { userId: number }) {
    return prisma.favorite.findMany({
      where: {
        userId: data.userId,
      },
    });
  }

  async create(data: { userId: number; symbol: string }) {
    return prisma.favorite.create({
      data: {
        userId: data.userId,
        symbol: data.symbol,
      },
    });
  }
}
