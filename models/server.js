const express = require('express');
const cors = require('cors');
const { connectionMongo } = require('../config/database');



class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

       //database connection
       this.databaseConnection();
        //middlewares
        this.middlewares();

        //routes
        this.routes();
    }

    async databaseConnection(){
         await connectionMongo()
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        this.app.use( express.json())
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/auth', require('../routes/api/auth'))
        this.app.use('/api/user', require('../routes/api/users'))
        this.app.use('/api/task', require('../routes/api/task'))
        this.app.use('/api/role', require('../routes/api/role'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', process.env.PORT);
        })
    }
}

module.exports = Server;