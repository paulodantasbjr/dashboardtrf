import { actions } from './actions'

export const reducers = (state, action) => {
  switch (action.type) {
    case actions.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      }
    case actions.AUTH:
      return {
        ...state,
        auth: action.payload,
      }
    case actions.ADD_MODAL:
      return {
        ...state,
        modal: action.payload,
      }
    case actions.ADD_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
