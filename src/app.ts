import express, { Application } from 'express'
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import methodOverride from 'method-override'
import { ApiRoutes } from "./routes/api-routes";
import { host, port, __static } from "../host.json"



class App {

    public app: Application;
    public router: express.Router;

    constructor() {
        this.app = express();
        this.router = express.Router();
        this.config();
        this.viewEngines();
        this.routeConfig();
        this.mongoSetup();
    }

    private config = () => {
        this.app.use(express.static(__static));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

    }

    private viewEngines = () => {
        this.app.engine('handlebars',exphbs({}))
        this.app.set("view engine","handlebars")
    }

    private routeConfig = () => {
        this.app.use('/api', new ApiRoutes(this.router).Routes());
    }

    private mongoSetup = () => {
        
    }

   
}

export default new App().app;

// const port2 = process.env.PORT || port;

// app.listen(port2, () => {
//     console.log(`Server Çalışıyor, http://${host}:${port2}`)
// })