import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from 'src/dto/create-news.dto';
import { InjectModel } from '@nestjs/sequelize';
import { News } from './news.model';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newsRepository: typeof News) {}

  async getAllNews() {
    const newsList = await this.newsRepository.findAll();
    return newsList;
  }

  async getNewsById(id: string) {
    const news = await this.newsRepository.findOne();
    return news;
  }

  async createNews(newsDto: CreateNewsDto) {
    const news = await this.newsRepository.create(newsDto);
    return news;
  }

  async deleteNewsById(id: string) {
    return true;
  }
}
