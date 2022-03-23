var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    dbo.collection("products").drop(function(errs, obj) {
        if (errs) throw errs;
        console.log("Collection dropped!");
        db.close();
    })
})
