/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;

var url ='mongodb://AnushaPalla:mongodb1@ds237713.mlab.com:37713/clientserverdb';
MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbase = db.db("clientserverdb");
    dbase.createCollection("newCollection", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
