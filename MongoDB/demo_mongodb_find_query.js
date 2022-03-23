var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    var query = {address: 'Yellow Garden 2'};
    dbo.collection("customers").find(query).toArray( function(errs, result) {
        if (errs) throw errs;
        console.log(result);
        db.close();
    })
})
