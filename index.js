const hapi = require('hapi');
const mongoose = require('mongoose');
const {
	ApolloServer,
} = require('apollo-server-hapi');
const category = require('./models/category');
const order = require('./models/order');
const product = require('./models/product');

/* swagger section */
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolver');

const server = new ApolloServer({
  typeDefs,
  resolvers
});


const app = hapi.server({
	port: process.env.PORT || 4000,
	host: 'localhost'
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
		path: '/api/v1/categories',
		config: {
			description: 'Get all categories',
			tags: ['api', 'v1', 'category']
		},
		handler: (req, reply) => {
			return category.find();
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/orders',
		config: {
			description: 'Get all orders',
			tags: ['api', 'v1', 'order']
		},
		handler: (req, reply) => {
			return order.find();
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/products',
		config: {
			description: 'Get all products',
			tags: ['api', 'v1', 'producr']
		},
		handler: (req, reply) => {
			return product.find();
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
