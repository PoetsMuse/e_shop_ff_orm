import fastify from 'fastify';
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Product } from './entities/product';

const app = fastify();

import AutoLoad from "@fastify/autoload";
app.register(AutoLoad, {
  dir: `${__dirname}/routes`,
})

const AppDataSource = new DataSource({
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



// Start the server
const main = async () => {
  AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    })

    app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server is listening on ${address}`);
    });
}

main().catch((error) => console.log(error));

  
