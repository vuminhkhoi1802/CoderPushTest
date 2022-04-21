const matchService = require("../services/matchService");

module.exports.getMatchs = async (req, res) => {
  const { user, page, limit } = req.query;
  const result = await matchService.getMatchs(user, page, limit);
  if (result)
    return res.status(200).json({
      data: result,
    });
  return res.status(400).json({
    messages: "Error!",
  });
};
