const userService = require("../services/userServices");
module.exports.getUsers = async (req, res) => {
  const { user } = req.query;
  const users = await userService.getUsers(user);
  if (users)
    return res.status(200).json({
      users,
    });
  return res.status(400).json({
    messages: "Error!",
  });
};

module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (user)
    return res.status(200).json({
      user,
    });
  return res.status(400).json({
    messages: "Error!",
  });
};
