const express = require('express')
const cors = require('cors')
class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.usuariosRoutes = '/api/usuarios'

        //MIDDELWARE
        this.middlewares();
        //RUTAS
        this.routes();
    }
    middlewares(){
        //CORS
        this.app.use(cors())

        //LEER DATOS DEL BOD
        this.app.use(express.json())

        this.app.use(express.static('public'))
        
    }
    routes(){
        this.app.use(this.usuariosRoutes, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port)
    }

}


module.exports = Server