import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FavoritesController } from './favorites/favorites.controller';
import { FavoritesService } from './favorites/favorites.service';
import { SymbolController } from './symbol/symbol.controller';
import { SymbolService } from './symbol/symbol.service';
import { PortfolioController } from './portfolio/portfolio.controller';

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
  ],
  providers: [AppService, FavoritesService, SymbolService],
})
export class AppModule {}
