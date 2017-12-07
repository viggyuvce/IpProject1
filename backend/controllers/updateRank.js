"use strict";
var models=require('../models');

var user=models['user'];


module.exports={
    updateRank:function (req,res){
        
        user.find({
            where:{
                id: req.params.id
            }
            
        }).then(function (initialDAO){
            initialDAO.update({
                ranks: req.params.rank,
                grades : req.params.grade
            });
            console.log(initialDAO);
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
            res.json(initialDAO.dataValues);

        });
         
    }
}