import { takeLatest, put, select } from 'redux-saga/effects';
import { userActions } from '../user';
import { contactsActions, contactsRequestActions } from './actions';
import { getContacts } from './selectors';
const Contacts = require('./data.json')

export function * loadContacts () {
  const contacts = yield select(getContacts);

  if (contacts.loaded === false) {
    yield put(contactsRequestActions.fulfilled(Contacts))
  }
}

export const contactsSagas = [
  takeLatest(userActions.USER_FETCH_SUCCEEDED, loadContacts),
  takeLatest(contactsActions.CONTACTS_LOAD, loadContacts),
]
