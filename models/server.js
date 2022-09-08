const express = require('express');
const cors = require('cors')



class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //middlewares
        this.middlewares();

        //

        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        this.app.use( express.json())
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/task', require('../routes/api/task'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corrienfoen puerto ', process.env.PORT);
        })
    }
}

module.exports = Server;