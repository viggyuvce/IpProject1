"use strict";
module.exports = function(sequelize, DataTypes){
	var user = sequelize.define('user',{
		username : DataTypes.STRING,
		password : DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
	//	points	:DataTypes.INTEGER
	//	usertype : {type :DataTypes.INTEGER, defaultValue : 3}, 
	//	contactNo : DataTypes.STRING
		//usertype : DataTypes.INTEGER,

	});
	return user;
}