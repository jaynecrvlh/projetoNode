// let users = [{_id: 1, nome: "alan", email:"alan@email.com", senha:"alan123"}, 
// {_id: 2, nome: "karine", email:"karine@email.com", senha:"karine123"}];

let User = require('../models/user.js');
let bcrypt = require('bcrypt');

module.exports.listarUsers = function (req, res) {
    // res.json(users);
    let promise = User.find().exec();
    promise.then(
        function(user){
            res.json(user)
        },
        function(erro){
            res.status(500).end();
        }
    )
};

module.exports.obterUser = function(req, res){
    let id = req.params.id;
    // let user = users.find(user => (users._id = id));
    let promise = User.findById(id);
    // if(user){
    //     res.json(user);
    // }
    // else{
    //     res.status(400).send("usuario não encontrado");
    // }

    promise.then(
        function(user){
            res.json(user)
        },
        function(erro){
            res.status(500).end();
        }
    )
}

module.exports.inserirUser = function(req, res){
    // antes do mongoose
    // users.push(req.body);
    // res.status(200).send(req.body); 

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    });

    let promise = User.create(user)
    promise.then(
        function(users){
            res.status(201).json(users)
        },
        function(erro){
            res.status(500).json(erro)
        }
    )
}

