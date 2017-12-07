module.exports = {
    getMp3 : function getMp3(req,res){
        var id = req.params.id;
        var file='/media/viggie/f39545d5-185d-4d88-8bc5-69cabfd9865b/viggy/IpProject/backend/audio/'+id+'.mp3';
        res.download(file);
    },
    getSheet : function getSheet(req,res){
        var id = req.params.id;
        var file='/media/viggie/f39545d5-185d-4d88-8bc5-69cabfd9865b/viggy/IpProject/backend/sheet/'+id+'.pdf';
        res.download(file);
    },
    getCertificate: function getCertificate(req,res){
       var id = req.params.id;
        var file='/media/viggie/f39545d5-185d-4d88-8bc5-69cabfd9865b/viggy/demo/IpProject1/backend/certificate/'+id+'.pdf';
        res.download(file);
    }
}