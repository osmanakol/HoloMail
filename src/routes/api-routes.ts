import express,{ Request,Response } from "express";

export class ApiRoutes{

    constructor(private router:express.Router){
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

        return this.router;
    }
}