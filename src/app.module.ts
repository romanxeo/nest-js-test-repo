import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CategoriesModule } from './categories/categories.module';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeModule } from '@nestjs/sequelize';
import { News } from './news/news.model';

@Module({
  imports: [
    NewsModule,
    CategoriesModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.TYPEORM_HOST,
    //   port: Number(process.env.TYPEORM_PORT),
    //   username: process.env.TYPEORM_USERNAME,
    //   password: process.env.TYPEORM_PASSWORD,
    //   database: process.env.TYPEORM_DATABASE,
    //   synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
    //   logging: Boolean(process.env.TYPEORM_LOGGING),
    //   entities: ['dist/src/entity/**/*.js'],
    //   migrations: ['dist/src/migration/**/*.js'],
    //   subscribers: ['dist/src/subscriber/**/*.js'],
    // }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [News],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
