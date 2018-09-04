const express = require('express');
const app = express();

app.get('/getForm',function(req,resp)
{
    resp.sendFile(__dirname + "/appForm.html");
});

app.get('/getData',function(req,resp)
{
   console.log(req.query.fname);
    console.log(req.query.lname);
    resp.send("Data recieved");
});
app.listen(3000);   