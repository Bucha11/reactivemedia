import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export const usersApi = {
  getUsers() {
    return instance.get("users").then((response) => response.data);
  },
  getPosts(id) {
    return instance.get(`users/${id}/posts`).then((response) => response.data);
  },
  updatingUser(patch) {
    return instance.patch(`users/${patch.id}`, { body: JSON.stringify(patch) });
  },
  addUser(user) {
    return instance.post(`users`, { body: JSON.stringify(user) });
  },
};
