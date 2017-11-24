var models=require('../models');
var composer=models['composer'];

module.exports ={
    showComposer : function showComposer(req,res){
        composer.findAll()
                        .then(function (composers){
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
		    return res.json(composers);
        });

    }
}