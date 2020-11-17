const express= require("express");
const app = express();
var fs = require('fs');

 

app.listen(3000,()=> console.log("your app is running "));
app.get ("/home",(request,response)=>{

fs.appendFileSync('./TEST/date-time.txt', + new Date());

var path = require('path');
var dirPath = path.resolve("./TEST/"); // path to your directory goes here
var filesList;
fs.readdir(dirPath, function (err, files) {
  filesList = files.filter(function (e) {
    return path.extname(e).toLowerCase() === '.txt'
  });

  console.log(filesList);
  response.send (filesList);
  
});
});


    