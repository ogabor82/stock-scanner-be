import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SymbolService } from './symbol.service';
import { ConfigService } from '@nestjs/config';

@Controller('symbol')
export class SymbolController {
  constructor(
    private readonly symbolService: SymbolService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  async findMany() {
    return this.symbolService.findMany();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    const symbolRes = await this.symbolService.findOne({ symbol: slug });
    if (!symbolRes) {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${slug}&apikey=${this.configService.get<string>(
          'DATABASE_HOST',
        )}`,
      );
      const data = await response.json();
      if (data.Note) {
        return { message: 'API rate limit exceeded' };
      }
      this.symbolService.create({
        symbol: data.Symbol,
        name: data.Name,
        description: data.Description,
        CIK: data.CIK,
        exchange: data.Exchange,
        currency: data.Currency,
        country: data.Country,
        sector: data.Sector,
        industry: data.Industry,
        address: data.Address,
        PERatio: data.PERatio,
        priceToSalesRatioTTM: data.PriceToSalesRatioTTM,
        dividendYield: data.DividendYield,
      });
      return data;
    }
    return symbolRes;
  }
}
