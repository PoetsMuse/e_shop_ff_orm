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
const app_data_source_1 = require("../app_data_source");
const entity_1 = require("../products/entity");
const productsRoute = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.get('/products', (_, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const productRepository = app_data_source_1.AppDataSource.getRepository(entity_1.Product);
            const products = yield productRepository.find();
            return reply.send(products);
        }
        catch (error) {
            reply.status(500).send({ error: 'Internal Server Error' });
        }
    }));
});
exports.default = productsRoute;
