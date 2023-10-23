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
const typebox_1 = require("@sinclair/typebox");
const plugin = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.get('/', {
        schema: {
            querystring: typebox_1.Type.Object({
                name: typebox_1.Type.String({ default: 'world' })
            }),
            response: {
                200: typebox_1.Type.Object({
                    hello: typebox_1.Type.String(),
                })
            }
        }
    }, (req) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = req.query;
        return {
            hello: name
        };
    }));
});
exports.default = plugin;