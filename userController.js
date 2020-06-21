const usersCtrl = {};

// Models
const User = require('./user');

const path = require('path');

// Modules
const passport = require("passport");

usersCtrl.renderRegistro = (req, res) => {
    res.sendFile(path.join(__dirname, './views', 'registro.html'));
};

usersCtrl.renderInicio = (req, res) => {
    res.sendFile(path.join(__dirname, './views', 'Login.html'));
};

usersCtrl.creaRegistro = async (req,res)=>{
    console.log(req.body)
    //res.send(req.body)
    let errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        console.log("las contraseñas no coinciden")
        errors.push({ text: "La contraseña no coincide." });
    }
    if (password.length < 4) {
        errors.push({ text: "La contraseña debe ser mayor a 4 caracteres." });
    }
    if (errors.length > 0) {
        res.sendFile(path.join(__dirname, './views', 'registro.html'),{
            errors,
            name,
            email,
            password,
            confirm_password
        });
       
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
          //req.flash("error_msg", "El correo ya esta registrado.");
          res.redirect("/login");
        } else {
          const newUser = new User({ name, email, password });
          //newUser.password = await newUser.encryptPassword(password);
          newUser.save();
          //req.flash("success_msg", "Registro exitoso!");
          res.sendFile(path.join(__dirname, './views', 'login.html'));
        }
    }
}

usersCtrl.entraPlataforma = async (req,res) =>{
    console.log(req.body)
    const {email,password} = req.body
    const emailU = await User.findOne({email: email})
    console.log(emailU)
    if(emailU){
        console.log("la contraseña es ", emailU.password)
        if(password == emailU.password){
            //res.redirect('/Inicio')
            res.sendFile(path.join(__dirname, './views', 'index.html'));
        }else{
            console.log("Contraseña inconrrecta")
        }

    }else{
        console.log("el usuario no existe!!")
    }
}



module.exports = usersCtrl;