import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SymbolService } from './symbol.service';

@Controller('symbol')
export class SymbolController {
  constructor(private readonly symbolService: SymbolService) {}

  @Get()
  async findMany() {
    return this.symbolService.findMany();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    //return this.symbolService.findOne({ symbol: slug });
    return slug;
  }
}
