import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080", // đổi theo backend của bạn
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ============================
// 1. Request Interceptor
// ============================
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ============================
// 2. Response Interceptor
// ============================
axiosClient.interceptors.response.use(
  (response) => response.data,

  async (error) => {
    const originalRequest = error.config;

    // Nếu access token hết hạn => gọi refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");

        const res = await axios.post("http://localhost:8080/auth/refresh", {
          refreshToken,
        });

        const newAccessToken = res.data.result.accessToken;

        localStorage.setItem("access_token", newAccessToken);

        // Gửi lại request bị fail với token mới
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosClient(originalRequest);
      } catch (refreshError) {
        console.log("Refresh token failed:", refreshError);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
