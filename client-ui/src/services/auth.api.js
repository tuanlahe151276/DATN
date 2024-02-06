import axios from "axios";
import { getDetailUserURL, loginURL, registerURL } from "./routers";
export const axiosJWT = axios.create();
export const loginAPI = async (data) => {
  try {
    const res = await axios.post(`${loginURL}`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

//Register
export const registerAPI = async (data) => {
  try {
    const res = await axios.post(`${registerURL}`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};
// Get detail
export const getDetailUserAPI = async (id, access_token) => {
  try {
    const res = await axiosJWT.get(`${getDetailUserURL}/${id}`, {
      headers: {
        Authorization: access_token,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
