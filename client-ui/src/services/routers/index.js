export const url = process.env.REACT_APP_API_URL;

//USER
export const loginURL = `${url}/Authentication/Login`;
export const registerURL = `${url}/Authentication/register`;
export const getDetailUserURL = `${url}/user/get-detail`;

export const logoutURL = `${url}/user/log-out`;
export const refreshTokenURL = `${url}/user/refresh-token`;
export const forgetPasswordURL = `${url}/user/forgot-password`;
