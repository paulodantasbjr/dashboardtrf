export const actions = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_MODAL: 'ADD_MODAL',
  ADD_USERS: 'ADD_USERS',
}

export const deleteItem = (data, id, type) => {
  const newData = data.filter((item) => item._id !== id)
  return { type, payload: newData }
}
