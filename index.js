const express=require('express');
//const engine=require('ejs-mate');
path=require('path');

//inicializaciones
app=express();//inicializo express

//settings
//app.use(express.static(path.join(__dirname,'assets')));//enlaces a la carpeta assets
//var modeloPuntosBD=require('./conexion').puntosBD;//traigo el modelo de mongoose a la variable
app.engine('ejs',engine);//inicializo el motor de plantillas ejs-mate
app.set('view engine','ejs');//inicializo el motor de plantillas ejs-mate
app.set('views',path.join(__dirname,'views'));//le digo al server donde esta la carpeta views

//rutas- aca renderizo lo que quiera
app.get('/', function(req,res){
  //modeloPuntosBD.find(function(err,datos){
  //var punto=datos[0];
  //var stringPunto=JSON.stringify(punto);
  //console.log('MONGO geoJSON: '+stringPunto);
  res.render('index.ejs',{});//renderizo la vista dentro de views y le paso data de models mongoose
  });



//inicializar servidor
puerto=process.env.PORT || 3000;


app.listen(puerto,function(){
  console.log('NODEJS:Servidor iniciado en el puerto: '+puerto);
});
