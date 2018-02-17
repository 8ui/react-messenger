import { takeLatest, put, select } from 'redux-saga/effects';
import { appActions } from '../app';
import { userActions, userActionsRequestActions } from './actions';
import { getUser } from './selectors';
import User from './data.json';

export function * loadUser () {
  const user = yield select(getUser);

  if (user.loaded === false) {
    yield put(userActionsRequestActions.fulfilled(User))
  }
}

export const userSagas = [
  takeLatest(appActions.INIT_APP, loadUser),
  takeLatest(userActions.USER_LOAD, loadUser),
]
