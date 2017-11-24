var Sequelize = require('sequelize');
var config = require('../config/configurations');
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password,{
	host : 'localhost',
	dialect : 'mysql',
	pool : {
		max: 10000,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;