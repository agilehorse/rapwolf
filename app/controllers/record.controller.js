const db = require("../models");
const Record = db.records;

// Create a Record for Artist with name
exports.createRecordForArtist = (req, res) => {
    const name = req.params.name;

    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    if (!name) {
        res.status(400).send({
            message: "Artist name cannot be empty!"
        });
        return;
    }

    // Create a Record
    const record = {
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        label: req.body.label,
        artistName: name
    };

    // Save Record in the database
    Record.create(record).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Record."
        });
    });
}

// Finds all records for artist with name
exports.findAllRecordsForArtist = (req) => {
    const name = req.params.name;

    return Record.findAll({
        where: {"artistName": name}
    }).then((record) => {
        return record;
    }).catch((err) => {
        console.log("Error while finding records: ", err);
    });
}

// Find a single Record with a name
exports.findOne = (req, res) => {
    const id = req.params.id;

    Record.findByPk(id).then(data => {
        res.send(data);
    }).catch(() => {
        res.status(500).send({
            message: "Error retrieving Record with id=" + id
        });
    });
};

// Update a Record by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Record.update(req.body, {
        where: {id: id}
    }).then(num => {
        if (num === 1) {
            res.send({
                message: "Record was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Record with id=${id}. Maybe Record was not found or req.body is empty!`
            });
        }
    }).catch(() => {
        res.status(500).send({
            message: "Error updating Record with id=" + id
        });
    });
};

// Delete a Record with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Record.destroy({
        where: {id: id}
    }).then(num => {
        if (num === 1) {
            res.send({
                message: "Record was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Record with id=${id}. Maybe Record was not found!`
            });
        }
    }).catch(() => {
        res.status(500).send({
            message: "Could not delete Record with id=" + id
        });
    });
};