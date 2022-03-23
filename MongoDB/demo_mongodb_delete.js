var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    var my_query = {address: 'Mountain 21'};
    dbo.collection("customers").deleteOne(my_query, function(errs, result) {
        if (errs) throw errs;
        console.log("1 document deleted!");
        db.close();
    })
})
