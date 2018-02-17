import { takeLatest, put, select } from 'redux-saga/effects';
import { userActions } from '../user';
import { messagesActions, messagesActionsRequestActions } from './actions';
import { getMessages } from './selectors';
const Messages = require('./data.json')

export function * loadMessages () {
  const messages = yield select(getMessages);

  if (messages.loaded === false) {
    yield put(messagesActionsRequestActions.fulfilled(Messages))
  }
}

export const messagesSagas = [
  takeLatest(userActions.USER_FETCH_SUCCEEDED, loadMessages),
  takeLatest(messagesActions.MESSAGES_LOAD, loadMessages),
]
