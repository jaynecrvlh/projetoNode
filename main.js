// console.log("hello word")

let http = require('http');
let app = require('./config/express')();
let db = require('./config/database');


http.createServer(app).listen(app.get('port'),  function(){
    console.log('Express Server executando na porta ' +app.get('port'))
});

db('mongodb://localhost/redeSocial-node');