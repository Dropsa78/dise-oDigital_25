
import mongoose from "mongoose";
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import {test} from './backend/controllers/user.controllers.js';

dotenv.config()
// estoy guardando la ruta 
mongoose.connect(process.env.urlbd) 

.then(() =>{
    console.log('si jala')
})
.catch((error)=>{
    console.log('no jala',error)
})


//Levantar el servidor
const app=express()
//protocolos de seguridad HTTPS
app.use(cors())
//escuchar el servidor
app.listen(4000, ()=>{
    console.log('se escucha')
})

test()//usamos nuestro test