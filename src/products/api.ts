import { FastifyPluginAsync } from 'fastify';
import { DeepPartial } from 'typeorm';
import { Product } from './entity'; 
import { AppDataSource } from '../app_data_source'; 

const createProductRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post('/products', async (request, reply) => {
    try {
      const productData = request.body as DeepPartial<Product>;
      const productRepository = AppDataSource.getRepository(Product);
      
      // Create a new product instance and save it to the database.
      const newProduct = productRepository.create(productData);
      const savedProduct = await productRepository.save(newProduct);

      return reply.code(201).send(savedProduct); // Respond with the saved product.
    } catch (error) {
      reply.code(500).send({ error: 'Internal Server Error' });
    }
  });
};

export default createProductRoute;

