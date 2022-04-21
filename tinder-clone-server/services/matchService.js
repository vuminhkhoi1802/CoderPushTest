const models = require("../models");
module.exports.getMatchs = async (userId, page, limit) => {
  try {
    const numberPage = +page - 1 || 0;
    const numberLimit = +limit || 10;
    const offset = numberPage * numberLimit;
    const users = await models.match.findAndCountAll({
      where: {
        userId,
      },
      limit: numberLimit,
      offset,
      include: [
        {
          model: models.user, as: 'userAccept'
        }
      ]
    });
    return users;
  } catch (error) {
    console.log(error);
    return false;
  }
};
