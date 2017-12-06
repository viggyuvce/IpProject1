"use strict";
module.exports = function(sequelize, DataTypes){
	var music = sequelize.define('music',{
        title: DataTypes.STRING,
		scale : DataTypes.STRING,
		description : DataTypes.TEXT,
        composers: DataTypes.STRING,
		link: DataTypes.STRING,
        
        grade: DataTypes.INTEGER,
		rank: DataTypes.INTEGER,
	});
	return music;
}