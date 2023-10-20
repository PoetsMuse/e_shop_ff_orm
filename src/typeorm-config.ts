// typeorm-config.ts
import { ConnectionOptions } from 'typeorm';

const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost', 
  port: 5432, 
  username: 'postgres',
  password: 'postgres',
  database: 'e_shop_ff_orm',
  synchronize: true,
  logging: true, // Set to false for production
  entities: ['src/product/entities.ts'],
};

export default typeOrmConfig;
