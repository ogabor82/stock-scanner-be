import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DividendService } from './dividend.service';
import { ConfigService } from '@nestjs/config';

@Controller('dividend')
export class DividendController {
  constructor(
    private readonly dividendService: DividendService,
    private readonly configService: ConfigService,
  ) {}

  @Get(':slug')
  async findDividendsbySymbol(@Param('slug') slug: string) {
    const dividendRes = await this.dividendService.findDividendsbySymbol({
      symbol: slug,
    });
    if (dividendRes.length === 0) {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=DIVIDENDS&symbol=${slug}&apikey=${this.configService.get<string>(
          'DATABASE_HOST',
        )}`,
      );
      const responseData = await response.json();
      if (responseData.Note) {
        return { message: 'API rate limit exceeded' };
      }

      if (!responseData.data) {
        return { message: 'No dividend data found' };
      }

      for (const dividend of responseData.data) {
        const dividendData = {
          symbol: slug,
          exDividendDate: dividend.ex_dividend_date,
          declarationDate: dividend.declaration_date,
          recordDate: dividend.record_date,
          paymentDate: dividend.payment_date,
          amount: dividend.amount,
        };

        this.dividendService.create(dividendData);
      }

      return responseData.data;
    }
    return dividendRes;
  }
}
