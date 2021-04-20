import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1";

function* login(actions) {
  const { payload } = actions;
  try {
    const res = yield axios.post(`${baseUrl}/user/signin`, payload);
    localStorage.setItem("token",res.data.token);
    yield put({type:"AUTH_SUCCESS"})
  } catch (error) {
    console.log(error);
  }
}

export function* watchLogin() {
  yield takeEvery("AUTH_REQUEST", login);
}
