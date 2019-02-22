const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://procyon:S1ar3@cluster0-shard-00-00-snszh.mongodb.net:27017,cluster0-shard-00-01-snszh.mongodb.net:27017,cluster0-shard-00-02-snszh.mongodb.net:27017/Catalogo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true })
//module.exports = mongoose.connect('mongodb://localhost/Catalogo', { useMongoClient: true })