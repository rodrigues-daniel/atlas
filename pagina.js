var express = require('express');
var router = express.Router();

router.get('/',function(req,res){

		res.render('pagina_principal',{texto:'texto de testes'});

});



module.exports = router


