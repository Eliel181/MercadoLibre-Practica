const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

const PUERTO = 3000;

app.listen(PUERTO, ()=>console.log(`Server lenvantado: PUERTO: ${PUERTO}`));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});