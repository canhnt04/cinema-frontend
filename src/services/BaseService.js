import axiosClient from "./axiosClient";

const request = async (method, url, body = null, params = null) => {
  try {
    const res = await axiosClient({ method, url, data: body, params });
    return res?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const get = (url, params) => request("get", url, null, params);
export const post = (url, body) => request("post", url, body);
export const put = (url, body) => request("put", url, body);
export const del = (url) => request("delete", url);
