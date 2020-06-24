const initialState = []

export default function listMovieReducers(state = initialState, action) {
  if(action.type === 'SET_LIST_MOVIES') {
    return action.payload
  }
  return state
}