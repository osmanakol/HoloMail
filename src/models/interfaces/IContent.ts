import { IAttachment } from "./IAttachment";

export interface IContent {
   from: string
   to: string
   subject: string
   html?: string
   text?: string
   attachment?: Array<IAttachment>
}