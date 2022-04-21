import axios from "axios";
const api = process.env.REACT_APP_API;
const me = process.env.REACT_APP_ME;

export const getAllUsers = async () => {
  const results = await axios.get(`${api}/user?user=${me}`);
  return results;
};

export const likeUser = async (userIdLike) => {
  const result = await axios.post(`${api}/like`, { userId: me, userIdLike });
  return result;
};
export const dislikeUser = async (userIdDislike) => {
  const result = await axios.post(`${api}/dislike`, {
    userId: me,
    userIdDislike,
  });
  return result;
};

export const getLikeUsers = async (page, limit) => {
  const results = await axios.get(
    `${api}/like?user=${me}&page=${page}&limit=${limit}`
  );
  return results;
};

export const getUserMatches = async (page, limit) => {
  const results = await axios.get(
    `${api}/match?user=${me}&page=${page}&limit=${limit}`
  );
  return results;
};
