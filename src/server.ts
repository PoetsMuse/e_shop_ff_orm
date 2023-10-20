import fastify from 'fastify';

const app = fastify();

// Define a route for the GET request at '/'
app.get('/', async (request, reply) => {
  return { status: 'active' };
});

// Start the server
app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is listening on ${address}`);
  });
  
