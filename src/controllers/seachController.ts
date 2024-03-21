import { Request,Response } from "express";
import {pet } from '../models/pet';
import {createObj} from '../helpers/createMenuObj';

export const seach = (req:Request,res:Response)=>{
    let q: string=req.query.q as string;
    let list = pet.getFromName(q);
    res.render('pages/page',{
        menu:createObj(''),
        list


    });
};