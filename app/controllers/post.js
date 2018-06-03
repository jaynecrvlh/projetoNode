// let posts = [{_id: 1, texto: "alan", like: 10, idu:"ajajaja"}, 
// {_id: 2, texto: "karine", like: 10, idu:"ajajajssssa"}];

let Post = require('../models/post.js');

// module.exports.listarPosts = function (req, res) {
//     res.json(posts);
// };

module.exports.listarPosts = function (req, res) {
    // res.json(users);
    let promise = Post.find().exec();
    promise.then(
        function(post){
            res.json(post)
        },
        function(erro){
            res.status(500).end();
        }
    )
};

// module.exports.obterPost = function(req, res){
//     let id = req.params.id;
//     let post = posts.find(post => (posts._id = id));
//     if(post){
//         res.json(post);
//     }
//     else{
//         res.status(400).send("post não encontrado");
//     }
// }

module.exports.obterPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id);
    promise.then(
        function(post){
            res.json(post)
        },
        function(erro){
            res.status(500).end();
        }
    )
}


// module.exports.inserirPost = function(req, res){
//     posts.push(req.body);
//     res.status(200).send(req.body);
// }

module.exports.inserirPost = function(req, res){
    let promise = Post.create(req.body)
    promise.then(
        function(post){
            res.status(201).json(post)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}
