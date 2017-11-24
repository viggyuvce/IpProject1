"use strict";
var fs = require("fs");
var path = require("path");
var sequelize = require('../tools/db_sequelize.js');

var db = {};
fs
  .readdirSync(__dirname)
  .filter(function(file){
    console.log(file);
  	return ((file.indexOf(".")!== 0) && (file !== "index.js"));
  })
  .forEach(function(file){
  	var model = sequelize.import(path.join(__dirname,file));
  	var name = model.name;
    //console.log(name);
  	db[name] = model;


  });

  Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
  });
  db.sequelize = sequelize;
  module.exports = db;
  