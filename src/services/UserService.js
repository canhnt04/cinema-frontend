import { get } from "./BaseService";

export const getuserInfoService = () => get("/users/me");

export const getUsersService = () => get("/users");
