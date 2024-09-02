import Axios from "axios";

const axios = Axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  axios,
};
