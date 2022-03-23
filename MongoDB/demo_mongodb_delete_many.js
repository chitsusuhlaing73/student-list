var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    var my_query = {address: /^O/};
    dbo.collection("customers").deleteMany(my_query, function(errs, result) {
        if (errs) throw errs;
        console.log(result.deletedCount + " document(s) deleted!");
        db.close();
    })
})
