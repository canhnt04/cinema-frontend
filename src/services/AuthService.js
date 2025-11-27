import { get, post } from "./BaseService";

export const loginService = (email, password) =>
  post("/auth/login", { email, password });

export const registerService = (data) => post("/auth/register", data);

export const MyInfoService = (data) => get("/users/myInfo", data);

export const logoutService = () => post("/auth/logout");
