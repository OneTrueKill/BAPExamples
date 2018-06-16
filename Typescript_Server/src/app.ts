/**
 * Created by Shan on 4/10/2018.
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';

import jobRouter from "./routes/jobRouter"

class ExpressServer {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }


    private middleware(): void {
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({extended: false}))
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello world!'
            });
        });


        this.express.use('/', router);

        this.express.use('/jobs', jobRouter.router)
    }
}


export default new ExpressServer().express;