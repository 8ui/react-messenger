import { takeLatest, put, select } from 'redux-saga/effects';
import { userActions } from '../user';
import { contactsActions, contactsActionsRequestActions } from './actions';
import { getContacts } from './selectors';
const Contacts = require('./data.json')

export function * loadContacts () {
  const contacts = yield select(getContacts);

  if (contacts.loaded === false) {
    yield put(contactsActionsRequestActions.fulfilled(Contacts))
  }
}

export const contactsSagas = [
  takeLatest(userActions.USER_FETCH_SUCCEEDED, loadContacts),
  takeLatest(contactsActions.CONTACTS_LOAD, loadContacts),
]
