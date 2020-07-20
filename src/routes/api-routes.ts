import express,{ Request,Response } from "express";
import { MailController } from "../controller/MailController";

export class ApiRoutes{

    private mailController:MailController
    constructor(private router:express.Router){
        this.mailController = new MailController();
        this.Routes()
    }

    public Routes = ():express.Router =>{
        this.router.route("/")
            .get((req:Request,res:Response)=>{
                res.json({
                    status:"HoloMail is working",
                    message:"Welcome to HoloMail"
                })
            })
        this.router.route("/account/verify")
            .get()
            .post()
        return this.router;
    }
}