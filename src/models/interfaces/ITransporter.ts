import { IAuth } from "./IAuth";

type Services = "gmail" | "outlook" | "hotmail" | "yandex";

export interface ITransporter {
    service: Services
    port?: string
    auth: IAuth
}