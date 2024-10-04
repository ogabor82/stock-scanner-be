import { Body, Controller, Get, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async findMany(@Body() data: { userId: number }) {
    return this.favoritesService.findMany(data);
  }

  @Post()
  async create(@Body() data: { userId: number; symbol: string }) {
    return this.favoritesService.create(data);
  }
}
