import { Get } from './Method';

const getAllUsers = () => Get(`users`);
const getDetailUser = (id) => Get(`users/${id}`);
const getReposUser = (id) => Get(`users/${id}/repos`);
const getFollowers = (id) => Get(`users/${id}/followers`);
const getFollowing = (id) => Get(`users/${id}/following`);

export const API = {
  getAllUsers: getAllUsers,
  getDetailUser: getDetailUser,
  getReposUser: getReposUser,
  getFollowers: getFollowers,
  getFollowing: getFollowing
}