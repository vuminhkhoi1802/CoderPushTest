const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const models = require("../models");
module.exports.getUsers = async (id) => {
  try {
    const getUserLiked = await models.like.findAll({
      where: {
        userId: id,
      },
    });
    const listIdUserLiked = getUserLiked.map((user) => user.userIdLike);
    const getUserDisliked = await models.dislike.findAll({
      where: {
        userId: id,
      },
    });
    const listIdUserDisiked = getUserDisliked.map((user) => user.userIdDislike);
    const listIdUsers = [...listIdUserLiked, ...listIdUserDisiked]
    const values = await models.user.findAndCountAll({
      where: {
        id: {
          [Op.not]: id,
          [Op.notIn]: listIdUsers,
        },
      },
      limit: 1,
    });
    return values;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.getUserById = async (id) => {
  try {
    const user = models.user.findOne({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};
