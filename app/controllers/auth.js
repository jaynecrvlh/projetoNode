let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let User = require('../models/user');

module.exports.logar = function(req, res){
    function logar(user){
        if(!bcrypt.compareSync(req.body.senha, user.senha)){
            falha();
        }else{
            let token =jwt.sign({user:user}, 'secret');
            res.status(200).json({
                message: "logado",
                token: token,
                userId: user._id
            })
        }
    }
    function falhar(){
        res.staus(401).send("Login invalido");
    }
    User.findOne({email: req.body.email}).exec().then(logar, falhar)
}

module.exports.checar = function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if (err){
            return res.status(401).json({
                title: 'Não autenticado',
                error: err
            });
        }
        next();
    })
};

