let express = require('express');
let routerUsers = require('../app/routes/user');
let routerPosts = require('../app/routes/post');
let bodyParser = require('body-parser');

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    routerUsers(app);
    routerPosts(app);
    return app;
};