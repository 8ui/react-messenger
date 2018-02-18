export const messagesActions = {
  MESSAGES_FETCH_PENDING: 'MESSAGES_FETCH_PENDING',
  MESSAGES_FETCH_SUCCEEDED: 'MESSAGES_FETCH_SUCCEEDED',
  MESSAGES_FETCH_FAILED: 'MESSAGES_FETCH_FAILED',
  MESSAGES_LOAD: 'MESSAGES_LOAD',

  fetchPending: () => ({
    type: messagesActions.MESSAGES_FETCH_PENDING
  }),
  fetchFulfilled: payload => ({
    type: messagesActions.MESSAGES_FETCH_SUCCEEDED,
    payload
  }),
  fetchFailed: payload => ({
    type: messagesActions.MESSAGES_FETCH_FAILED,
    payload
  }),
  load: () => ({
    type: messagesActions.MESSAGES_LOAD
  })
}

export const messagesRequestActions = {
  pending: messagesActions.fetchPending,
  fulfilled: messagesActions.fetchFulfilled,
  failed: messagesActions.fetchFailed,
};
