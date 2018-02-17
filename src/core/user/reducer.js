import { userActions as type } from './actions'

const initialState = {
  data: {},
  loading: false,
  loaded: false,
  error: null
}

export function userReducer (state = initialState, action) {
  switch (action.type) {
    case type.USER_FETCH_PENDING:
      return {...state, loading: true}
    case type.USER_FETCH_SUCCEEDED:
      return {...state, loading: false, loaded: true, data: action.payload}
    case type.USER_FETCH_FAILED:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
