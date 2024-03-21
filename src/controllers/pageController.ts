import { Request,Response } from "express";
import {createObj} from '../helpers/createMenuObj';
import {pet} from '../models/pet';

export const home = (req:Request,res:Response)=>{

    let list = pet.getAll();


    res.render('pages/page',{
        menu:createObj('all'),
        banner:{
            title:'todos os animais',
            back:'allanimals.jpg'
        },
        list
    });
};

export const dogs = (req:Request,res:Response)=>{
    let list = pet.getFromName('dog');
    res.render('pages/page',{
        menu:createObj('dog'),
        banner:{
            title:'Cachorros',
            back:'banner_dog.jpg'
        },
        list

    });
};

export const cats = (req:Request,res:Response)=>{
    let listcat = pet.getFromName('cat');
    res.render('pages/page',{
        menu:createObj('cat'),
        banner:{
            title:'gatos',
            back:'banner_cat.jpg'
        },
        listcat
    });
};

export const fishes = (req:Request,res:Response)=>{
    res.render('pages/page',{
        menu:createObj('fish'),
        banner:{
            title:'peixes',
            back:'banner_fish.jpg'
        }
    });
};

