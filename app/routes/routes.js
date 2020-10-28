module.exports = app => {
    const artists = require("../controllers/artist.controller.js");
    const records = require("../controllers/record.controller.js");

    let router = require("express").Router();

    // Create a new Artist
    router.post("/artists", artists.create);

    // Retrieve all Artists
    router.get("/artists", artists.findAll);

    // Retrieve a single Artist by name
    router.get("/artists/:name", artists.findOne);

    // Update a Artist by name
    router.put("/artists/:name", artists.update);

    // Delete a Artist by name
    router.delete("/artists/:name", artists.delete);

    // Create a new Record for an Artist by name
    router.post("/artists/:name/records", records.createRecordForArtist);

    // Retrieve all Records of Artist by name
    router.get("/artists/:name/records", records.findAllRecordsForArtist);

    // Updates a Record by id
    router.put("/records/:id", records.update);

    // Gets a Record by id
    router.get("/records/:id", records.findOne);

    // Deletes a Record by id
    router.delete("/records/:id", records.delete);

    app.use('/api', router);
};