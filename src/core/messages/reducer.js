import { messagesActions as type } from './actions'

const initialState = {
  data: [],
  loading: false,
  loaded: false,
  error: null
}

export function messagesReducer (state = initialState, action) {
  switch (action.type) {
    case type.MESSAGES_FETCH_PENDING:
      return {...state, loading: true}
    case type.MESSAGES_FETCH_SUCCEEDED:
      return {...state, loading: false, loaded: true, data: action.payload}
    case type.MESSAGES_FETCH_FAILED:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
