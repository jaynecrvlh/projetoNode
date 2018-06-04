let mongoose =  require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true, 
            index:{
                unique:true
            }
        },
        senha:{
            type: String,
            required: true,
        }
    });
    return mongoose.model('User', schema); 
}();