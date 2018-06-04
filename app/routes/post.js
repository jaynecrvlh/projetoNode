let controller = require ("../controllers/post.js");
let auth = require("../controllers/auth.js");

module.exports = function(app){
    app.use("/api/posts/", auth.checar);
    app.post("/api/posts", controller.inserirPost);
    app.get("/api/posts", controller.listarPosts);  
    app.get("/api/posts/:id", controller.obterPost);
    app.get('/api/posts/:id/usuario', controller.userPost);
    app.put('/api/posts/:id', controller.editarPost)
    app.delete('/api/posts/:id', controller.excluirPost);
}