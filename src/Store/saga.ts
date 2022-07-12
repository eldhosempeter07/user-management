import { all, fork } from "redux-saga/effects";
import UserSaga from "./Users/saga";

export default function* rootSaga() {
  yield all([fork(UserSaga)]);
}
