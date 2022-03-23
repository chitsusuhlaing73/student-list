var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    dbo.collection("customers").find().limit(3).toArray( function(errs, result) {
        if (errs) throw errs;
        console.log(result);
        db.close();
    })
})
