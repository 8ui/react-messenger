import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { contactsReducer as contacts } from './contacts'
import { messagesReducer as messages } from './messages'
import { userReducer as user } from './user'


export const rootReducer = combineReducers({
  routerReducer,
  contacts,
  messages,
  user,
})
