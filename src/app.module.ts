import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoritesController } from './favorites/favorites.controller';
import { FavoritesService } from './favorites/favorites.service';

@Module({
  imports: [],
  controllers: [AppController, FavoritesController],
  providers: [AppService, FavoritesService],
})
export class AppModule {}
