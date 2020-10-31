

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const authJwt = require("../auth/authJwt");
    const artists = require("../controllers/artist.controller.js");
    const records = require("../controllers/record.controller.js");

    // Create a new Artist
    app.post("/api/artists", [authJwt.verifyToken], artists.create);

    // Retrieve all Artists
    app.get("/api/artists", artists.findAll);

    // Retrieve a single Artist by name
    app.get("/api/artists/:name", artists.findOne);

    // Update a Artist by name
    app.put("/api/artists/:name", [authJwt.verifyToken], artists.update);

    // Delete a Artist by name
    app.delete("/api/artists/:name", [authJwt.verifyToken], artists.delete);

    // Create a new Record for an Artist by name
    app.post("/api/artists/:name/records", [authJwt.verifyToken], records.createRecordForArtist);

    // Retrieve all Records of Artist by name
    app.get("/api/artists/:name/records", records.findAllRecordsForArtist);

    // Updates a Record by id
    app.put("/api/records/:id", [authJwt.verifyToken], records.update);

    // Gets a Record by id
    app.get("/api/records/:id", records.findOne);

    // Deletes a Record by id
    app.delete("/api/records/:id", [authJwt.verifyToken], records.delete);
};