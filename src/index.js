const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
cors = require('cors'),
itemRoute = require('./routes/item'),
institucionRoute = require('./routes/Institucion')
app = express();

//Settings
app.set('port', process.env.PORT || 3000);


//MiddleWare
app.use(bodyParser.json());
 app.use(cors());

//Routes
app.use('/item',itemRoute);
app.use('/Institucion', institucionRoute);


//Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log('Server on Port: '+ app.get('port'))
});