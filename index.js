const hapi = require('hapi');
const mongoose = require('mongoose');
const {
	ApolloServer,
} = require('apollo-server-hapi');
const Connection = require('tedious').Connection;

const level1 = require('./MsSql/level1');
const level2 = require('./MsSql/level2');
const level3 = require('./MsSql/level3');
const level4 = require('./MsSql/level4');
const level5 = require('./MsSql/level5');
const level6 = require('./MsSql/level6');
const level7 = require('./MsSql/level7');
const level8 = require('./MsSql/level8');
const level9 = require('./MsSql/level9');

/* swagger section */
const Inert = require('inert');
const Vision = require('vision');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const typeDefs = require('./graphql/schema');
const mongoContext = require('./dal/context');
let app, server;


const config = {  
	userName: 'sa_webuser',  
	password: 'Nova2014',  
	server: 'daveseepersaddb.database.windows.net',  
	// If you are on Microsoft Azure, you need this:  
	options: {encrypt: true, database: 'graphql'}  
};  
const connection = new Connection(config);  
connection.on('connect', function(err) {  
// If no error, then good to proceed.  
	connection.config.options.rowCollectionOnDone = true;
	connection.config.options.rowCollectionOnRequestCompletion = true;
	process.env.msSqlConnection = connection;
	console.log("sql database Connected");  

	const resolvers = require('./graphql/resolver');
	resolvers.setConnection(connection);
	server = new ApolloServer({
		typeDefs,
		resolvers: resolvers.query
	  });
	  
	  
	app = hapi.server({
		  port: process.env.PORT || 4001,
	});

	init();
});  



mongoose.connect(process.env.MONGODB || 'mongodb://storage:pwd12345!@ds153093.mlab.com:53093/graphql-rest-comparison');

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
		path: '/api/v1/level1',
		config: {
			description: 'Get level 1',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level1.loadLevel1(connection);
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/level2',
		config: {
			description: 'Get level 2',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level2.loadLevel2(connection);
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/level3',
		config: {
			description: 'Get level 3',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level3.loadLevel3(connection);
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/level4',
		config: {
			description: 'Get level 4',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level4.loadLevel4(connection);
		}
	}]);

	app.route([{
		method: 'GET',
		path: '/api/v1/level5',
		config: {
			description: 'Get level 5',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level5.loadLevel5(connection);
		}
	}]);
	
	app.route([{
		method: 'GET',
		path: '/api/v1/level6',
		config: {
			description: 'Get level 6',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level6.loadLevel6(connection);
		}
	}]);
	
	app.route([{
		method: 'GET',
		path: '/api/v1/level7',
		config: {
			description: 'Get level 7',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level7.loadLevel7(connection);
		}
	}]);
	
	app.route([{
		method: 'GET',
		path: '/api/v1/level8',
		config: {
			description: 'Get level 8',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level8.loadLevel8(connection);
		}
	}]);
	
	app.route([{
		method: 'GET',
		path: '/api/v1/level9',
		config: {
			description: 'Get level 9',
			tags: ['api', 'v1', 'level']
		},
		handler: async (req, reply) => {
			return await level9.loadLevel9(connection);
		}
	}]);

	// app.route([{
	// 	method: 'GET',
	// 	path: '/api/v1/categories/{id}',
	// 	config: {
	// 		description: 'Get categories by id',
	// 		tags: ['api', 'v1', 'category'],
	// 		validate: {
	// 			params: {
	// 				id: Joi.number()
	// 			}
	// 		}
	// 	},
	// 	handler: async (req, reply) => {
	// 		return await mongoContext.getCategory(req.params.id)
	// 	}
	// }]);

	// app.route([{
	// 	method: 'GET',
	// 	path: '/api/v1/orders/{id}',
	// 	config: {
	// 		description: 'Get orders by id',
	// 		tags: ['api', 'v1', 'order'],
	// 		validate: {
	// 			params: {
	// 				id: Joi.number()
	// 			}
	// 		}
	// 	},
	// 	handler: async (req, reply) => {
	// 		return await mongoContext.getOrder(req.params.id)
	// 	}
	// }]);

	// app.route([{
	// 	method: 'GET',
	// 	path: '/api/v1/orders',
	// 	config: {
	// 		description: 'Get all orders',
	// 		tags: ['api', 'v1', 'orders']
	// 	},
	// 	handler: async (req, reply) => {
	// 		return await mongoContext.getOrders()
	// 	}
	// }]);

	// app.route([{
	// 	method: 'GET',
	// 	path: '/api/v1/products/{id}',
	// 	config: {
	// 		description: 'Get products by id',
	// 		tags: ['api', 'v1', 'producr'],
	// 		validate: {
	// 			params: {
	// 				id: Joi.number()
	// 			}
	// 		}
	// 	},
	// 	handler: async (req, reply) => {
	// 		return await mongoContext.getProduct(req.params.id)
	// 	}
	// }]);

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

