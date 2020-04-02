import express from 'express'
import path from "path";
import  bodyParser from "body-parser";
import methodOverride from 'method-override'
const {host,port,__static} = require('../host.json')

const app = express();

app.use(express.static(__static))
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

const port2 = process.env.PORT || port;

app.listen(port2, () => {
    console.log(`Server Çalışıyor, http://${host}:${port2}`)
})