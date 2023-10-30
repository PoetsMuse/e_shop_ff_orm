"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("./entity"); // Make sure to import your Product entity from the correct location.
const app_data_source_1 = require("../app_data_source"); // Adjust the import path as needed.
const createProductRoute = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.post('/products', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const productData = request.body;
            const productRepository = app_data_source_1.AppDataSource.getRepository(entity_1.Product);
            // Create a new product instance and save it to the database.
            const newProduct = productRepository.create(productData);
            const savedProduct = yield productRepository.save(newProduct);
            return reply.code(201).send(savedProduct); // Respond with the saved product.
        }
        catch (error) {
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    }));
});
exports.default = createProductRoute;
