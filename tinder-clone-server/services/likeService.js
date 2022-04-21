const models = require("../models");

module.exports.addLike = async (userId, userIdLike) => {
  try {
    if (userId === userIdLike) return false;
    const isLikeMatch = await models.like.findOne({
      where: {
        userId,
        userIdLike,
      },
    });
    if (isLikeMatch) return false;
    const values = await models.like.create({ userId, userIdLike });
    const isLikeMatchTwo = await models.like.findOne({
      where: {
        userId,
        userIdLike,
      },
    });
    const valuesMatch = await models.like.findAll({
      where: {
        userId: userIdLike,
        userIdLike: userId,
      },
    });

    if (valuesMatch.length && isLikeMatchTwo) {
      await models.match.create({ userId: userIdLike, userIdAccept: userId });
    }

    return values;
  } catch (error) {
    return error;
  }
};

module.exports.getUserLike = async (userId, page, limit) => {
  try {
    const numberPage = +page - 1 || 0;
    const numberLimit = +limit || 10;
    const offset = numberPage * numberLimit;
    const listUsers = await models.like.findAndCountAll({
      where: { userId },
      limit: numberLimit,
      offset,
      include: [
        {
          model: models.user, as: 'userLike'
        }
      ]
    });
    return listUsers
  } catch (error) {
    console.log(error);
    return false;
  }
};
