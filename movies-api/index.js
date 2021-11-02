const express = require('express');
const app = express();

const { config } = require('./config/index');

// create a route in Express.js:
app.get('/', function(req, res){
    res.send('Hello, World.');
});

app.get('/express', function(req, res){
    res.send('Hello, Express.');
});

app.get('/json', function(req, res){
    res.json({ hello: 'World'});
});

app.listen(config.port, function(){
    //console.log(`Listening at http://127.0.0.1:${config.port}`);
});
 
app.get('/stats', function(req, res){
    res.json({ stats:'good'});
})