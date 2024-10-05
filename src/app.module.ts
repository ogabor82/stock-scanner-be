import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FavoritesController } from './favorites/favorites.controller';
import { FavoritesService } from './favorites/favorites.service';
import { SymbolController } from './symbol/symbol.controller';
import { SymbolService } from './symbol/symbol.service';
import { PortfolioController } from './portfolio/portfolio.controller';
import { DividendController } from './dividend/dividend.controller';
import { DividendService } from './dividend/dividend.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [
    AppController,
    FavoritesController,
    SymbolController,
    PortfolioController,
    DividendController,
  ],
  providers: [AppService, FavoritesService, SymbolService, DividendService],
})
export class AppModule {}
