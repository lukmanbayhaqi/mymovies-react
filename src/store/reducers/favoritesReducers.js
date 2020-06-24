const initialState = []

export default function favoritesReducers(state = initialState, action) {
  if (action.type === 'SET_FAVORITES') {
    return [ ...state, action.payload ]
  }
  return state
}