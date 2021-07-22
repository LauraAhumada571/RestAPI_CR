'use strict'
const cors = require('cors');
const ejs = require('ejs');
const express = require('express');
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


