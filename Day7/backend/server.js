import express from 'express'

const PORT = 8000

const app = express();

app.get('/product',(req,res) =>{
    res.status(200).json({message: "Data get success"});
})

app.listen(PORT);