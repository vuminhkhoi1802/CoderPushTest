"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const config = require("../config/config");
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./user")(sequelize, Sequelize);
db.match = require("./match")(sequelize, Sequelize);
db.like = require("./like")(sequelize, Sequelize);
db.dislike = require("./dislike")(sequelize, Sequelize);

db.user.hasMany(db.match, { foreignKey: "userIdAccept" });
db.match.belongsTo(db.user, { foreignKey: "userIdAccept", as: "userAccept" });

db.user.hasMany(db.like, { foreignKey: "userIdLike" });
db.like.belongsTo(db.user, { foreignKey: "userIdLike", as: "userLike" });

module.exports = db;
