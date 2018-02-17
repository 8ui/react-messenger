export const getMessages = state => state.messages

export const getMessagesData = state => getMessages(state).data

export const getMessagesByUser = (state, {match: {params}}) => (
  params.id
  ? getMessagesData(state).filter(n => n.from === +params.id || n.to === +params.id)
  : []
)
