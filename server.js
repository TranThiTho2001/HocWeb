const express = require("express");
const cors = require("cors");
const config = require("./app/config");
const setupContactRoutes = require("./app/routes/contact.routes");

const { BadRequestError } = require("./app/helpers/errors");

const app = express();

app.use(cors({origin: config.app.origin}));

//parse(phan tich cu phap) request of conten-type - application/json
app.use(express.json());

//parse request of conten-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

const bd = require("./app/models");
db.mongoose.connect(config.db.url)
.then(() => {
    console.log("Connected to the database!");
})
.catch((error) => {
    console.log("Cannot connect to the database!",error);
    process.exit();
});
//simple route
app.get("/",(req,res) => {
     res.json('welcome to contact book application.');
    res.log('hello');
});

setupContactRoutes(app);

//hanle 404 respone
app.use((req,res,next) => {
    next(new BadRequestError(404, "Resource not found"));
});


// define error-handling middleware last, after other app.user() and route calls
app.use((err,req,res,next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
        message: err.message || "internal Server Error",
    }) ;
}) ;
//set port, listen for request
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});


