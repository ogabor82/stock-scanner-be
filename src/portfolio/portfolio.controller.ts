import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SymbolService } from 'src/symbol/symbol.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly symbolService: SymbolService) {}

  @Get(':slugs')
  async findOne(@Param('slugs') slugs: string) {
    const symbols = slugs.split(',');
    return this.symbolService.findMany(symbols);
  }
}
