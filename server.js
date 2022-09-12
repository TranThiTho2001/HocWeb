const express = require("express");
const cors = require("cors");
const config = require("./app/config");

const app = express();

app.use(cors({origin: config.app.origin}));

//parse(phan tich cu phap) request of conten-type - application/json
app.use(express.json());

//parse request of conten-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

//simple route
app.get("/",(req,res)=>{
    res.json({ message: "welcome to contact book application."});
});

//set port, listen for request
const PORT = config.app.port;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}.`);
});


