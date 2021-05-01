import { LOGIN, LOGOUT, REGISTER } from "./types";

export const loginAuth = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const registerAuth = (user) => {
  return {
    type: REGISTER,
    payload: user,
  };
};

export const logout=()=>{
  return {
    type: LOGOUT,
  }
}