/**
 * Created by Shan on 5/9/2018.
 */

import {Router, Request, Response, NextFunction} from 'express'
import db from "../db/database"


export class JobRouter {
    router: Router

    constructor(){
        this.router = Router();
        this.init()
    }



    private init(){
        this.router.get('/', this.getAll )
        this.router.get('/:id', this.getOne)
    }



    public getAll(req: Request, res: Response, next: NextFunction){
        db.models.job.findAll({}).then( result => {res.json(result)}
        )
    }


    public getOne(req: Request, res: Response, next: NextFunction){
        let param = parseInt(req.params.id);
        db.models.job.findById(param).then(result => {res.json(result)})
    }


}

export default new JobRouter();