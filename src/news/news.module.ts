import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { News } from './news.model';

@Module({
  providers: [NewsService],
  controllers: [NewsController],
  imports: [SequelizeModule.forFeature([News])],
})
export class NewsModule {}
