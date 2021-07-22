'use strict'
const cors = require('cors');
const ejs = require('ejs');
const express = require('express');
//const fileUpload= require('express-fileupload');
const app = express();
const router = express.Router();

//setting
app.set('port', process.env.PORT || 3000);
app.set('hosting', '192.168.0.103');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

//middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
const locationRoutes = require('./public/service/location/location.routes');
/*const ofertasRoutes= require('./service/ofertas/ofertas.routes');
const usuariosRoutes = require('./service/usuarios/usuarios.routes');
const storage= require('./service/storage/storage.routes');
const mailSer= require('./service/mail/mail.routes');
const hv= require('./service/HV/hv.routes');
const notificaciones = require('./service/notificaciones/notificaciones.routes');
app.use('/api',router);
usuariosRoutes(router);
authRoutes(router);
ofertasRoutes(router);
storage(router);
mailSer(router);
hv(router);
notificaciones(router);*/
app.use('/api',router);
locationRoutes(router);
app.use('/static',express.static('file'));

app.get('/', function (req, res) {
  res.send('estamos en home, bienvenidos');
});

app.use(router);

app.listen(app.get('port'), () =>{
  console.log('El servidor se ejecuto con exito ', app.get('port'));
}); 


