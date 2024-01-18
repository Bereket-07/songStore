import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.response.use(
  null,
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.log("logging an error", error);
      toast("there is unexpected error");
    }
    return Promise.reject(error);
  }
);

export default {
  get: instance.get,
  post: instance.post,
  delete: instance.delete,
  put: instance.put,
};
