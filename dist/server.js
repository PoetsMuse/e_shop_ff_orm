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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
require("reflect-metadata");
const app_data_source_1 = require("./app_data_source");
const api_1 = __importDefault(require("./products/api"));
const fastify = (0, fastify_1.default)({
    logger: true
});
// Start the server
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app_data_source_1.AppDataSource.initialize();
        console.log('Data Source has been initialized!');
        fastify.register(api_1.default);
        fastify.listen({ port: 3000 }, (err, address) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`Server is listening on ${address}`);
        });
    }
    catch (error) {
        console.error('Error during Data Source initialization', error);
        process.exit(1);
    }
});
main().catch((error) => console.error(error));
