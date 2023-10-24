import fastify from 'fastify';
import { DataSource } from 'typeorm'

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
  logging: true,
  synchronize: true,
  entities: [`${__dirname}/products/entity.ts}`],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

// Start the server
app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is listening on ${address}`);
  });
  
