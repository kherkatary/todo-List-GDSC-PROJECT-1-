const express = require("express");
const bodyParser= require("body-parser");
const ejs=require("ejs");

const app= express();

let Item=[];

let numArr=[];




app.set("view engine", "ejs"); 

app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static("public"));


app.get("/", function(req,res){

    res.render("main", {newItem:Item, numberI:numArr});

});



app.post("/", function(req,res){

    let item=req.body.todo;

    Item.push(item);

    res.redirect("/");

    
});

for(var i=0;i<Item.length;i++){
    numArr[i]=i;
}


app.listen(3000,function(){

    console.log("running on port 3000");

});













 



