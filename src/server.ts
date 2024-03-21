import  Express  from "express";
import dotenv from 'dotenv';
import mustache from "mustache-express";
import path from 'path';
import { Request,Response } from "express";
import  mainRouter  from "../src/routes";

dotenv.config();
const server = Express();

server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());
server.use(Express.static(path.join(__dirname, '../public')));
server.use(mainRouter);

server.use((req:Request,res:Response)=>{
    res.status(404).send('PAGINA NAO ENCONTRADA');
});

server.listen(process.env.PORT);
