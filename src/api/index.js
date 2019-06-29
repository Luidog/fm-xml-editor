import axios from "axios";

const instance = axios.create({
  baseURL: "https://release.buddy-system.io/api/dropship",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

const api = {
  get: {
    clip: id => instance.get(`/clips/${id}`).then(response => response.data),
    user: id => instance.get(`/clips/${id}`).then(response => response.data)
  },
  authenticate: id => instance.get(`/clip/${id}`)
};

export default api;
