import { post } from "./BaseService";

export const loginService = (email, password) =>
  post("/auth/login", { email, password });

export const registerService = (fullName, email, phone, password, role) =>
  post("/users", { fullName, email, phone, password, role });
