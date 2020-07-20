import { ITransporter } from "./interfaces/ITransporter";
import { IAuth } from "./interfaces/IAuth";
import { IContent } from "./interfaces/IContent";
import { IAttachment } from "./interfaces/IAttachment";

export class Email{
    
    constructor(public transporter:ITransporter,public auth:IAuth,public content:IContent,public attachment?:IAttachment){}

}