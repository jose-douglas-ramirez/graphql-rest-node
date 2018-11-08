const hapi = require('hapi');
const mongoose = require('mongoose');
const {
	ApolloServer,
} = require('apollo-server-hapi');
/* swagger section */
const Inert = require('inert');
const Vision = require('vision');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolver');
const mongoContext = require('./dal/context');

const server = new ApolloServer({
  typeDefs,
  resolvers
});


const app = hapi.server({
	port: process.env.PORT || 4001,
});

mongoose.connect('mongodb://storage:Pwd1234!@ds153093.mlab.com:53093/graphql-rest-comparison');

mongoose.connection.once('open', () => {
	console.log('connected to database');
});

const init = async () => {

	await app.register([
		Inert,
		Vision,
		{
			plugin: HapiSwagger,
			options: {
				info: {
					title: 'API Documentation',
					version: Pack.version
				}
			}
		}
	]);

	await app.register(require('hapi-response-time'));

	app.route([{
		method: 'GET',
		path: '/api/v1/categories/{id}',
		config: {
			description: 'Get categories by id',
			tags: ['api', 'v1', 'category'],
			validate: {
				params: {
					id: Joi.number()
				}
			}
		},
		handler: async (req, reply) => {
			return await mongoContext.getCategory(req.params.id)
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/orders/{id}',
		config: {
			description: 'Get orders by id',
			tags: ['api', 'v1', 'order'],
			validate: {
				params: {
					id: Joi.number()
				}
			}
		},
		handler: async (req, reply) => {
			return await mongoContext.getOrder(req.params.id)
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/orders',
		config: {
			description: 'Get all orders',
			tags: ['api', 'v1', 'orders']
		},
		handler: async (req, reply) => {
			return await mongoContext.getOrders()
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/products/{id}',
		config: {
			description: 'Get products by id',
			tags: ['api', 'v1', 'producr'],
			validate: {
				params: {
					id: Joi.number()
				}
			}
		},
		handler: async (req, reply) => {
			return await mongoContext.getProduct(req.params.id)
		}
	}]);

	await server.installSubscriptionHandlers(app.listener);

	await server.applyMiddleware({
		app,
	});

	await app.start();
	console.log(`Server running at: ${app.info.uri}`);
};

process.on('unHandledRejection', (err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
});

init();
