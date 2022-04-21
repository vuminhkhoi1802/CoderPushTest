const models = require("../models");
module.exports.dislike = async (userId, userIdDislike) =>{
    try {
        const result = await models.dislike.create({userId, userIdDislike});
        return result
    } catch (error) {
        console.log(error);
        return false;
    }
}