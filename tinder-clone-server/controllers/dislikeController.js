const dislikeServices = require("../services/dislikeService");

module.exports.dislike = async (req, res) => {
  const { userId, userIdDislike } = req.body;
  const values = await dislikeServices.dislike(userId, userIdDislike);
  if (values)
    return res.status(200).json({
      data: values,
    });
  return res.status(400).json({
    messages: "Error!",
  });
};
