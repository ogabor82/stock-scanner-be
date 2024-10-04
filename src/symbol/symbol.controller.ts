import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SymbolService } from './symbol.service';
import { ConfigService } from '@nestjs/config';

@Controller('symbol')
export class SymbolController {
  constructor(
    private readonly symbolService: SymbolService,
    private readonly configService: ConfigService,
  ) {}

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    const symbolRes = await this.symbolService.findOne({ symbol: slug });
    if (!symbolRes) {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${slug}&apikey=${this.configService.get<string>(
          'DATABASE_HOST',
        )}`,
      );
      const responseData = await response.json();
      if (responseData.Note) {
        return { message: 'API rate limit exceeded' };
      }

      const symbolData = {
        symbol: responseData.Symbol,
        name: responseData.Name,
        description: responseData.Description,
        CIK: responseData.CIK,
        exchange: responseData.Exchange,
        currency: responseData.Currency,
        country: responseData.Country,
        sector: responseData.Sector,
        industry: responseData.Industry,
        address: responseData.Address,
        PERatio: responseData.PERatio,
        priceToSalesRatioTTM: responseData.PriceToSalesRatioTTM,
        dividendPerShare: responseData.DividendPerShare,
        dividendYield: responseData.DividendYield,
        marketCapitalization: responseData.MarketCapitalization,
        EPS: responseData.EPS,
      };

      this.symbolService.create(symbolData);
      return symbolData;
    }
    return symbolRes;
  }
}
