import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateNewsDto } from '../dto/create-news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAllNews() {
    return this.newsService.getAllNews();
  }

  @Get(':id')
  getNewsById(@Param('id') id: string) {
    return this.newsService.getNewsById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createNews(@Body() createNews: CreateNewsDto) {
    return this.newsService.createNews(createNews);
  }

  @Delete('id')
  deleteNewsById(@Param('id') id: string) {
    return this.newsService.deleteNewsById(id);
  }
}
