import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { AUTH_FAILED, AUTH_REMOVE_ERRORS, AUTH_SUCCESS, LOGIN, REGISTER } from "../actions/types";
const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1";

function* login(actions) {
  const { payload } = actions;
  try {
    const res = yield axios.post(`${baseUrl}/user/signin`, payload);
    localStorage.setItem("token", res.data.token);
    yield put({ type: AUTH_SUCCESS });
  } catch (e) {
    const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
    const errors = e.response.data.errors;
    yield put({ type: AUTH_FAILED, payload: errors });
    yield call(delay, 2000);
    yield put({ type: AUTH_REMOVE_ERRORS });
  }
}

function* register(actions) {
  const { payload } = actions;
  try {
    const res = yield axios.post(`${baseUrl}/user/signup`, payload);
    localStorage.setItem("token", res.data.token);
    yield put({ type: AUTH_SUCCESS });
  } catch (e) {
    const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
    const errors = e.response.data.errors;
    yield put({ type: AUTH_FAILED, payload: errors });
    yield call(delay, 2000);
    yield put({ type: AUTH_REMOVE_ERRORS });
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
export function* watchRegister() {
  yield takeEvery(REGISTER, register);
}
