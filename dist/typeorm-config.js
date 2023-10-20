"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'e_shop_ff_orm',
    synchronize: true,
    logging: true,
    entities: ['src/product/entities.ts'],
};
exports.default = typeOrmConfig;
