import mongoose from "mongoose";
import express from 'express'
import Person from "./Model/person.js";
import Menu from "./Model/Menu.js";
const app=express()
const mongoURL='mongodb+srv://adeeljavaid640:p%4055w0rd@cluster0.9g0nco3.mongodb.net/'

import bodyParser from "body-parser";
import * as e from 'express';
app.use(bodyParser.json())
const ConnectDB=async()=>{ 
    try {
        await mongoose.connect(mongoURL)
        console.log("connected to database")
    } catch (error) {
        console.log("error in connecting to database",error)
    }

 }
 ConnectDB()
 app.get('/person',async(req,res)=>{
    try{
const data=await Person.find()
res.status(200).json(data)
    }catch(e){
        res.status(500).json({error:e.message})
    }})
 
 app.post('/post',async(req,res)=>{
    try{
    const data=req.body;
    const person=new Person(data)
    const response=await person.save()
    
    console.log(response)
    res.status(200).json(response)
}
catch(e){
console.log(e)
}
})

app.post('/menu',async(req,res)=>{
    try{
    const data=req.body;
    const menu=new Menu(data)
    const response=await menu.save()
    
    console.log(response)
    res.status(200).json(response)
}
catch(e){
console.log(e)
}
})      

app.get('/person/:workType',async(req,res)=>{
   try{ const WorkType=req.params.workType
    if(WorkType=='chef'||WorkType=='manager'||WorkType=='waiter'){
const finder=await Person.find({work:WorkType})
res.status(200).json(finder)
    }}catch(e){
        res.status(500).json({error:e.message})
    }})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})