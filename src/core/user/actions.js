export const userActions = {
  USER_FETCH_PENDING: 'USER_FETCH_PENDING',
  USER_FETCH_SUCCEEDED: 'USER_FETCH_SUCCEEDED',
  USER_FETCH_FAILED: 'USER_FETCH_FAILED',
  USER_LOAD: 'USER_LOAD',

  fetchPending: () => ({
    type: userActions.USER_FETCH_PENDING
  }),
  fetchFulfilled: payload => ({
    type: userActions.USER_FETCH_SUCCEEDED,
    payload
  }),
  fetchFailed: payload => ({
    type: userActions.USER_FETCH_FAILED,
    payload
  }),
  load: () => ({
    type: userActions.USER_LOAD
  })
}

export const userRequestActions = {
  pending: userActions.fetchPending,
  fulfilled: userActions.fetchFulfilled,
  failed: userActions.fetchFailed,
};
