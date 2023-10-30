import { FastifyInstance, FastifyReply } from 'fastify';
import { AppDataSource } from '../app_data_source';
import { Product } from '../products/entity';

const productsRoute = async (fastify: FastifyInstance) => {
  fastify.get('/products', async (_, reply: FastifyReply) => {
    try {
      const productRepository = AppDataSource.getRepository(Product);
      const products = await productRepository.find();
      return reply.send(products);
    } catch (error) {
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });
};

export default productsRoute;
