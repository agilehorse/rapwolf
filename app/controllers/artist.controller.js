const db = require("../models");
const Artist = db.artists;

// Create and Save a new Artist
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create an Artist
    const artist = {
        name: req.body.name,
        realName: req.body.realName,
        bio: req.body.bio
    };

    // Save Artist in the database
    Artist.create(artist).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Artist."
        });
    });
};

// Retrieve all Artists from the database.
exports.findAll = (req, res) => {

    Artist.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving artists."
        });
    });
};

// Find a single Artist with a name
exports.findOne = (req, res) => {
    const name = req.params.name;

    Artist.findByPk(name).then(data => {
        res.send(data);
    }).catch(() => {
        res.status(500).send({
            message: "Error retrieving Artist with name=" + name
        });
    });
};

// Update an Artist by the name in the request
exports.update = (req, res) => {
    const name = req.params.name;

    Artist.update(req.body, {
        where: {name: name}
    }).then(num => {
        if (num[0] === 1) {
            res.send({
                message: "Artist was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Artist with name=${name}. Maybe Artist was not found or req.body is empty!`
            });
        }
    }).catch(() => {
        res.status(500).send({
            message: "Error updating Artist with name=" + name
        });
    });
};

// Delete an Artist with the specified name in the request
exports.delete = (req, res) => {
    const name = req.params.name;

    Artist.destroy({
        where: {name: name}
    }).then(num => {
        if (num === 1) {
            res.send({
                message: "Artist was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Artist with name=${name}. Maybe Artist was not found!`
            });
        }
    }).catch(() => {
        res.status(500).send({
            message: "Could not delete Artist with name=" + name
        });
    });
};