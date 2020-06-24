const initialState = {}

export default function detailMovie(state = initialState, action) {
  if(action.type === 'SET_DETAIL_MOVIE') {
    return action.payload
  }
  return state
}