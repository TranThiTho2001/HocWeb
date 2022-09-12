// create and save a new contact

const { handle } = require("../helpers/errors");
const { Contact } = require("../models");

// exports laf tu khoa chi vung nho luu tru bien create, bien create co gia tri dc gan phia sau
exports.create = async(req,res) => {
    res.send({ message: 'create handler'});
};

//Retrive all contacts of a user from the database
exports.findAll = async(req,res) => {
    res.send( {message: "findAll handler"});
};

//Find a single contact with an id
exports.findOne = async (req,res) => {
    res.send({ message: "findOne handler"});
};

//Update a contact by the is in the request
exports.update = async (req, res) =>{
    res.send({ message: "Update handler"});
};

//Delete a contact with the specified id in the request
exports.delete = async (req,res) => {
    res.send({ message: "delete handler"});
};

//Delete all contacts of a user from the database
exports.deleteAll = async (req,res) => {
    res.send({message: "deleteAll handler"});
};

//Find all favorite contacts of a user
exports.findAllFavorite = async (req,res) => {
    res.send({message: "findAllFavorite handler"});
};

//create and Save a new Contact
exports.create = async(req, res, next) => {
    //validate(Xac Nhan) request
    if(!req.body.name){
        return next(new BabRequestError((400, "Name can not be empty")));
    }

    //Create a contact
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        favorite: String(req.body.favorite).toLowerCase()==="true",
    })


    //Save contact in the database
    const [error, document] = await handle(contact.save());

    if(error){
        return next(new BabRequestError(500,
            "An error occurred while creating the contact"));
    }

    return res.send(document);
};


//Retrieve(lay lai, khoi phuc) all contact of user from database
exports.findAll = async (req, res, next) => {
    const condition = { };
    const name = req.query.name;
    if(name){
        condition.name = { $regex: new RegExp(name), $options: "i"}; // "i" khong phan biet bien name la ky tu hoa hay thuong
    }

    const [error, document] = await handle(Contact.find(condition));

    if(error) {
        return next(new BabRequestError(500,
            `Error retrieving contact with id=${req.params.id}`));
    }

    return res.send(document);
};

//Find a single contact with an id
exports.findOne = async (req, res, next) => {
    const condition = { 
        _id: req.params.id,
    };

    const [error, document] = await handle(Contact.findOne(condition));

    if(error) {
        return next(new BabRequestError(500,
            "An error occured while retrieving contacts"));
    }

    if(!document){
        return next(new BabRequestError(404,"Contact not found"));
    }
    return res.send(data);
};

// Update a contact by the id in the request
exports.update = async (req, res, next) => {
    if(!req.body){
        return next(new BabRequestError(400,
            "Data to update can not be emppty"));
    }

    const condition = {
        _if: req.params.id,
    };

    const [error, document] = await handle(
        Conatcy.findOneAndUpdate(condition, req.body,{
            new: true,
        })
    );

    if(error){
        return next(new BabRequestError(500,
            `Error updating contact with id=${req.params.id}`));
    }
    if(!document) {
        return next(new BabRequestError(404, "Contact not found"));
    }

    return res.send({message: "Contact was updated successfully"});
}