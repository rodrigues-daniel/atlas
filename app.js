var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var pagina = require('./pagina.js');

app.set('view engine','pug');
app.set('views','./views');

app.use('/pug',pagina); 
app.use('/public',express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 

app.get('/form',function(req,res){

		res.render('form');
});

app.post('/',function(req,res){

		console.log(req.body);
		res.send("Boa Tarde " + req.body.nome + " " + "voce tem " + req.body.idade + " anos");
});




app.listen(8080);