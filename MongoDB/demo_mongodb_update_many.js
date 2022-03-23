var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    var my_query = {address: /^S/};
    var new_query = {$set: {name: 'Kay Thwe Tun'}};
    dbo.collection("customers").updateMany(my_query, new_query, function (errs, res) {
        if (errs) throw errs;
        console.log(res.modifiedCount + " document(s) updated!");
        db.close();
    })
})
