const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Server lenvantado: PUERTO ${port}`));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/login', function (req, res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})

app.get('/register', function(req, res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})