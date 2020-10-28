const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.artists = require("./artist.model.js")(sequelize, Sequelize);
db.records = require("./record.model.js")(sequelize, Sequelize);
db.artists.hasMany(db.records, {as: "records"});
db.records.belongsTo(db.artists, {
   foreignKey: "artistName",
   as: "artist"
});

module.exports = db;