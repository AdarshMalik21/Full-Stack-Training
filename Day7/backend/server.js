import express from 'express'
import { connectDB } from './db.js';


connectDB();
const PORT = 8000

const app = express();

app.get('/product',(req,res) =>{
    res.status(200).json({message: "Data get success"});
})
app.post('/product',(req,res) =>{
    res.status(201).json({message: "product added successfully"})
})

app.listen(PORT);