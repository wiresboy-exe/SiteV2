const express = require('express');
const app = express();

app.use(express.static(__dirname + "/"));

app.use(function(req, res){
    if(req.url === '/')return res.sendFile(__dirname + '/index.html')

    res.sendFile(__dirname + req.url+'.html')
})

app.listen(7680)
