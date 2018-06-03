let controller = require ("../controllers/user.js");
let auth = require("../controllers/auth.js");

module.exports = function(app){
    app.post("/api/users/login", auth.logar);
    app.post("/api/users", controller.inserirUser);
    app.use("/api/users/", auth.checar);
    app.get("/api/users", controller.listarUsers);
    app.get("/api/users/:id", controller.obterUser);
}