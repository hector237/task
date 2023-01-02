const express = require('express');
const cors = require('cors');
const { connectionMongo } = require('../config/database');



class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth: '/api/auth',
            category: '/api/category',
            product: '/api/product',
            role: '/api/role',
            user: '/api/user',
        };

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
        this.app.use(this.path.auth, require('../routes/api/auth'));
        this.app.use(this.path.category, require('../routes/api/categories'));
        this.app.use(this.path.product, require('../routes/api/product'));
        this.app.use(this.path.role, require('../routes/api/role'));
        this.app.use(this.path.user, require('../routes/api/users'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', process.env.PORT);
        })
    }
}

module.exports = Server;