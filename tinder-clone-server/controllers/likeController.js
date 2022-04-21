const likeService = require("../services/likeService");
module.exports.addLike = async (req, res) => {
  const { userId, userIdLike } = req.body;
  const users = await likeService.addLike(userId, userIdLike);
  if (users)
    return res.status(200).json({
      users,
    });
  return res.status(400).json({
    messages: "Error!",
  });
};

module.exports.getUserLike = async (req, res) => {
  const { user, page, limit } = req.query;
  console.log(user);
  const result = await likeService.getUserLike(user, page, limit);
  if (result)
    return res.status(200).json({
      data: result,
    });
  return res.status(400).json({
    messages: "Error!",
  });
};
