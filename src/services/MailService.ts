import nodemailer from "nodemailer";
import { ITransporter } from "../models/interfaces/ITransporter";



export class MailService {
    
    
    public verifyAccount = async (transporter: ITransporter) => {
        let transport = nodemailer.createTransport({
            pool: true,
            service: transporter.service,
            secure: true,
            port: 465,
            auth: {
                user: transporter.auth.user,
                pass: transporter.auth.pass
            }

        })
        console.log(transport)
        return await transport.verify();
    }
}