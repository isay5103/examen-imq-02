//Declaraciones 
const express = require("express");
const hbs = require('hbs');
const bodyParser = require ("body-parser");
const port = process.env.PORT || 3000; 

const app=express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//app.get - leer recursos(pagina,imagen,etc);
//app.post - crear 
//app.put - Update
//app.delete - Eliminar
app.get('/dashboard',(req,res)=>{
    //res.send('Aqui va el dash')
    res.render('dashboard')
})
app.get('/login',(req,res)=>{
   // res.send('Aqui va el login por POST')
  res.render('login')
})
app.get('/productos',(req,res)=>{
    // res.send('Aqui va el login por POST')
   res.render('productos')
 })
app.get('*',(req,res)=>{
    //res.send('Aqui va el 404 por GET')
    res.render('404',{
        nombre:"Jose Luis",
        edad: "27"
    })
})

app.listen(port,()=>{
    console.log('Servidor en express corriendo en el puerto') 
})