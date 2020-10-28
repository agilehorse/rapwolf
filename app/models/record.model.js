module.exports = (sequelize, Sequelize) => {
    const consts = require("../consts");

    return sequelize.define("record", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.ENUM(consts.recordTypes.ALBUM, consts.recordTypes.EP, consts.recordTypes.SINGLE)
        },
        year: {
            type: Sequelize.INTEGER
        },
        label: {
            type: Sequelize.STRING
        }
    });
};