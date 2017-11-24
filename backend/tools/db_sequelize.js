var Sequelize = require('sequelize');
var config = require('../config/configurations.js');
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password,{
	host : 'localhost',
	dialect : 'mysql',
	pool : {
		max: 1000,
		min: 0,
		idle: 1000
	}
});

sequelize
	.authenticate()
	.then(function(err){
		console.log('Connection eshtablised successfully');
	})
	.catch(function(err){
		console.log('Connection to db failed');
	});


module.exports = sequelize;