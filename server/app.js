var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('<h1>Hello World!</h1>');
});

app.listen(3000, function(){
    console.log('Server attivo sulla porta 3000');
});