import express from "express";
import type {Express} from "express";
import {serverConfig} from './config/index.js'
import pingRouter from "./router/ping.router.js";
const app: Express = express();

// registering all routes and their corresponding routes without app server object 
app.use(pingRouter);


const PORT = serverConfig.PORT;
app.listen(PORT, () => {
    console.log(`server started successfully http://localhost:${PORT}`)
})