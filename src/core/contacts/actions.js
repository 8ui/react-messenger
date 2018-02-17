export const contactsActions = {
  CONTACTS_FETCH_PENDING: 'CONTACTS_FETCH_PENDING',
  CONTACTS_FETCH_SUCCEEDED: 'CONTACTS_FETCH_SUCCEEDED',
  CONTACTS_FETCH_FAILED: 'CONTACTS_FETCH_FAILED',
  CONTACTS_LOAD: 'CONTACTS_LOAD',

  fetchPending: () => ({
    type: contactsActions.CONTACTS_FETCH_PENDING
  }),
  fetchFulfilled: payload => ({
    type: contactsActions.CONTACTS_FETCH_SUCCEEDED,
    payload
  }),
  fetchFailed: payload => ({
    type: contactsActions.CONTACTS_FETCH_FAILED,
    payload
  }),
  load: () => ({
    type: contactsActions.CONTACTS_LOAD
  })
}

export const contactsActionsRequestActions = {
  pending: contactsActions.fetchPending,
  fulfilled: contactsActions.fetchFulfilled,
  failed: contactsActions.fetchFailed,
};
