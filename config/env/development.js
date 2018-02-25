module.exports = {
    db_uri: 'mongodb://admin:admin@ds247688.mlab.com:47688/linklibapp',
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect(this.db_uri, callback)
    }
};