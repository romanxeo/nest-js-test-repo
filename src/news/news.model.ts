import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface NewsCreationAttrs {
  title: string;
  description: string;
  category: string;
}

@Table({ tableName: 'news' })
export class News extends Model<News, NewsCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  category: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
