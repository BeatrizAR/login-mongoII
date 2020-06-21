const {Schema,model} = require('mongoose')
const bcrypt =require('bcryptjs')

const UserSchema = new Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true}
},{timestamps:true})

//para la encriptacion del password
UserSchema.methods.encryptPassword = async password => {
    //entre mas salt mas seguro pero requiere de mas esfuerzo
    const salt= await bcrypt.genSalt(10);
    //regresa el password incriptado
    return await bcrypt.hash(password,salt);

}

UserSchema.methods.matchPassword = async function (password){
    //password es la contraseña entregada y this.password es la contraseña que se encuentra en la bd
    return await bcrypt.compare(password,this.password)
}

module.exports = model('User',UserSchema)