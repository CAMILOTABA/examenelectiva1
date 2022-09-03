const express= require("express");

const app=express();

//conexion bases de datos
const mongoose = require('mongoose');

const user = 'electivae';
const password ='electivae';
const dbbase='carros';
const uri =`mongodb+srv://${user}:${password}@electivact.u5itkst.mongodb.net/${dbbase}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlparser:true,useUnifiedtopology:true}
    )

.then(()=> console.log('base de datos conectada'))    
.catch(e => console.log(e))   

app.get("/",(req,res)=>{
    res.send("hola mundo");
})


app.listen(8080, ()=>console.log('Conexion correcta'));