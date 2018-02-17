import { all } from 'redux-saga/effects'
import { contactsSagas } from './contacts'
import { messagesSagas } from './messages'
import { userSagas } from './user'

export default function * mainSaga () {
  yield all([
    ...contactsSagas,
    ...messagesSagas,
    ...userSagas,
  ])
}
