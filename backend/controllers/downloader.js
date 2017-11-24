module.exports = {
    getMp3 : function getMp3(req,res){
        var id = req.params.id;
        var file='/home/viggy/dbmsProj/dbmsProj/server1/mp3/'+id+'.mp3';
        res.download(file);
    },
    getSheet : function getSheet(req,res){
        var id = req.params.id;
        var file='/home/viggy/dbmsProj/dbmsProj/server1/sheets/'+id+'.pdf';
        res.download(file);
    }
}