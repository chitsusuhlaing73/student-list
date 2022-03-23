var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cvdb");
    var my_obj = [
        { _id: 154, name: "Chocolate Heaven" },
        { _id: 155, name: "Tasty Lemon" },
        { _id: 156, name: "Vanilla Dream" }
    ];
    dbo.collection("products").insertMany(my_obj, function(errs, res) {
        if (errs) throw errs;
        console.log(res);
        db.close();
    })
})
