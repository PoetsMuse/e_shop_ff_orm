import Fastify from 'fastify';
import 'reflect-metadata';
import { AppDataSource } from './app_data_source'; 
import createProductRoute from './products/api';
import productsRoute from './routes/products';

const fastify = Fastify({
  logger: true
})


// Start the server
const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    fastify.register(createProductRoute);
    fastify.register(productsRoute);

    fastify.listen({ port: 3000 }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server is listening on ${address}`);
    });
  } catch (error) {
    console.error('Error during Data Source initialization', error);
    process.exit(1);
  }
};

main().catch((error) => console.error(error));

