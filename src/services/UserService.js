import { del, get, post, put } from "./BaseService";

export const getuserInfo = () => get("/users/me");

export const getUsers = () => get("/users");

export const addUser = (data) => post("/users", data);

export const updateUser = (userId, data) => put(`/users/${userId}`, data);

export const deleteUser = (userId) => del(`/users/${userId}`, userId);
