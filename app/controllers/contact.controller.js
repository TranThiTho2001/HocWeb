// create and save a new contact
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