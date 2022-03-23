var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    var my_obj = {
        name : "Company Inc",
        address : "Highway 37"
    }
    dbo.collection("customers").insertOne(my_obj, function(errs, res) {
        if (errs) throw errs;
        console.log("1 document inserted");
        db.close();
    })
})
