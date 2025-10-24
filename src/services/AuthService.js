import axios from "axios";
export const loginService = async (email, password) => {
  try {
    const res = await axios.post("/api/auth/login", { email, password });
    return res.data;
  } catch (error) {
    throw error.res?.data?.message;
  }
};
