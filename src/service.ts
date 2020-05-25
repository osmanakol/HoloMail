import { host,port  } from "../host.json";
import app from "./app";

app.listen(port,()=>{
    console.log(`Server çalışıyor, http://${host}:${port}`);
})