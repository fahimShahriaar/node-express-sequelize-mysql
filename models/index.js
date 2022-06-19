// requiring console log color
const { color, log } = require("console-log-colors");
const { red, green, cyan } = color;

const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel")(sequelize, DataTypes);
db.reviews = require("./reviewModel")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    log.green("DB synced");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
