import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000
});

const api = {
  get: {
    clip: id => instance.get(`/clips/${id}`).then(response => response.data),
    user: id => instance.get(`/users/${id}`).then(response => response.data)
  },
  authenticate: id => instance.patch(`/clip/${id}`)
};

export default api;
