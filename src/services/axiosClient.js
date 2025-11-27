import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
});

// attach token to header
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const { response, config } = error;
    if (response?.status === 401 && !config.url.includes("/auth/login")) {
      localStorage.removeItem("accessToken");
      console.log("Token expired. Please login again.");
    }

    return Promise.reject(error);
  }
);

export default axiosClient;

// handle token expired -> refreshToken
// axiosClient.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const originalRequest = error.config;

//     // error 401 and no entry
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         const res = await axios.post("http://localhost:8000/auth/refresh", {
//           refreshToken,
//         });

//         const newAccessToken = res.data.accessToken;
//         localStorage.setItem("accessToken", newAccessToken);
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//         return axiosClient(originalRequest);
//       } catch (error) {
//         console.log("RefreshToken faild:", error);
//       }

//       return Promise.reject(error);
//     }
//   }
// );
