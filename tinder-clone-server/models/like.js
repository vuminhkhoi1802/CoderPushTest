'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init({
    userIdLike: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};