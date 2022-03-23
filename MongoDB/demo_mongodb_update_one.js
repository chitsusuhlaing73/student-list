var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    var my_query = {address: 'Valley 345'};
    var new_query = {$set: {name: 'Chit Su Su Hlaing', address: 'Yangon'}};
    dbo.collection("customers").updateOne(my_query, new_query, function (errs, res) {
        if (errs) throw errs;
        console.log("1 document updated!");
        db.close();
    })
})