var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    dbo.collection("customers").findOne({}, function(errs, result) {
        if (errs) throw errs;
        console.log(result.name);
        db.close();
    })
})
