  const express = require('express');
  const morgan = require('morgan');
  const exphbs = require('express-handlebars') ;
  const path= require('path');
  
//inicializaciones
  const app = express();
//settings
  app.set('port',process.env.PORT || 4000);
  app.set('views',path.join(__dirname,'views'));//se especifica donde esta la carpeta
  app.engine('hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),//se le dice donde esta layouts
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  }));
  app.set('view engine','.hbs');
//middlewares
  app.use(morgan('dev'));
  app.use(express.urlencoded({extends:false}));
  app.use(express.json());
//variables locales 
  app.use((req,res,next)=>{
    next();
  });//se usa para variables globales

//rutas
  app.use(require('./rout/index'));
  app.use('/autenticacion',require('./rout/autenticacion'));
//public
  app.use(express.static(path.join(__dirname, 'public')));
//iniciando servidor

app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });