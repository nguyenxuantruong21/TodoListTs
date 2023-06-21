import './actions'
import { ActionType } from './actions'

export const initialState = { age: 26 }

export const init = (initArg: typeof initialState) => {
  return { ...initArg, age: initialState.age + 6 }
}

const reducer = (state: typeof initialState, action: ActionType) => {
  if (action.type === 'increase_age') {
    return { ...state, age: state.age + 1 }
  }
  if (action.type === 'decrease_age') {
    return { ...state, age: state.age - 1 }
  }
  if ((action.type = 'increase_x_age')) {
    return { ...state, age: state.age + action.payload }
  }
  throw Error('invalid action: ', action)
}

export default reducer
