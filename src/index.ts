import fs from "fs"
import express, {Express, Request, Response} from "express"

const port = 7000;
const app: Express = express();

/*GET REQUEST*/
app.get("/", (req: Request, res: Response) => {
    res.send("This is a TS REST API");
});

/*GET REQUEST*/
app.get("/hello", (req: Request, res: Response) => {

    /*Test of Native code*/
    const addon = require('./../build/Release/addon');

    res.send(addon.hello());
});

/*Print test.txt after each compile*/
fs.writeFileSync("test.txt", "test")

/*Prints server port*/
app.listen(port, ()=>{
    console.log(`now listening on port ${port}`)
})