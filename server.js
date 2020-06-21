const express = require('express');
//const exphbs = require('express-handlebars')
const path = require('path');
const cons = require('consolidate')
const morgan = require('morgan')

//Inicializaciones
const app = express();

//configuraciones

app.set('port', process.env.PORT|| 4000)
app.set('views', path.join(__dirname, 'views'));



//middleware
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

//Global variables

//routers
app.use(require('./userRoute'))

//static files
app.use(express.static(path.join(__dirname,'public')))

module.exports = app;