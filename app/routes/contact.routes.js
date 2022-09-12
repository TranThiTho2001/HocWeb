const contacts = require("../controllers/contact.controller");
const express = require("express");

module.exports = (app) => {
    var router = express.Router(); //  Router trong express framwork là một bộ định tuyến giúp cho chúng ta định 
                                    //danh ra các url và hành động kèm theo nó(post, get, put, delete, head, path).

    // Create a new contact
    router.post("/", contacts.create); // dau "/" la duong dan url den file chua tap tin contact.controller9do duong dan tap tin nay da duoc dan o tren nen chi de dau "/" tap tin nay chua method Create cua bien contacts

    //Retrieve all contacts
    router.get("/", contacts.create);

    //Retrieve(lay = find) all favorite contacts
    router.get("/favorite", contacts.findAllFavorite);

    //Retrieve a single contact with id
    router.get("/:id", contacts.findOne);

    //Update a contact with id
    router.put("/:id", contacts.update);

    //Delete a contact with id
    router.delete("/:id", contacts.delete);

    //Delete all contacts
    router.delete("/", contacts.deleteAll);

    app.use("/api/contacts", router);
};