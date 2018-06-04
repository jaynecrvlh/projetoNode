let express = require('express');
let bodyParser = require('body-parser');

let routerUsers = require('../app/routes/user');
let routerPosts = require('../app/routes/post');


module.exports = function(){
    let app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    routerUsers(app);
    routerPosts(app);
    return app;
};