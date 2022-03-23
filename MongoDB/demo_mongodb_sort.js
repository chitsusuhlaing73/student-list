var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    var my_sort = {name: 1};  // 1 = ASC , -1 = DESC
    dbo.collection("customers").find({}).sort(my_sort).toArray( function(errs, result) {
        if (errs) throw errs;
        console.log(result);
        db.close();
    })
})
