import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { Type } from '@sinclair/typebox';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
    fastify.get('/', {
        schema: {
            querystring: Type.Object({
                status: Type.String({ default: 'active' })
            }),
            response: {
                200: Type.Object({
                    status: Type.String(),
                })
            }
            }
        }, async(req) => {
            const { status } = req.query;
            return {
                status: status
            }
    });
}

export default plugin;