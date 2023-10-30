import { DataSource } from "typeorm";
import { Product } from './products/entity';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "e_shop_ff_orm",
    entities: [Product],
    logging: true,
    synchronize: true,
  })

  AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    })