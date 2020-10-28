module.exports = (sequelize, Sequelize) => {
    return sequelize.define("artist", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        realName: {
            type: Sequelize.STRING
        },
        bio: {
            type: Sequelize.TEXT
        }
    });
};