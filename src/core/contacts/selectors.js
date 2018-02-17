export const getContacts = state => state.contacts

export const getContactsData = state => getContacts(state).data

export const getContactById = (state, {match: {params}}) => (
  params.id
  ? getContactsData(state).find(n => n.id === +params.id)
  : {}
)
