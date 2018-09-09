const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');


const app = express();app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extends: true,
}
));

app.get('/',function(req,res){
    res.send("Hello world");
})

app.post('/api/v1/celebs', celebController.postNewCeleb);
app.get('/api/v1/celebs', celebController.getAllCelebs);
app.get('/api/v1/celebs/:id', celebController.getCelebById);


app.set('port',5000);
app.listen(app.get('port'),function(){
    console.log('the server is working');
});