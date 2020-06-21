const { Router }= require('express')
const router = Router()

const { renderRegistro, creaRegistro, entraPlataforma,renderInicio } = require('./userController')

router.get('/registro',renderRegistro)
router.post('/registro',creaRegistro)

router.post('/login',entraPlataforma)
router.get('/login',renderInicio)

module.exports = router