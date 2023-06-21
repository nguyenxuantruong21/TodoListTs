import React, { useReducer } from 'react'
import '../../../src/reducer/reducer'
import { ActionType, decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from '../../reducer/actions'
import reducer, { init, initialState } from '../../../src/reducer/reducer'

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, init)

  const increaseAge = () => {
    dispatch(increaseAgeAction())
  }

  const decreaseAge = () => {
    dispatch(decreaseAgeAction())
  }

  const increaseXAge = (value: number) => {
    dispatch(increaseXAgeAction(value))
  }

  return (
    <>
      <button onClick={increaseAge} style={{ color: 'red' }}>
        increase
      </button>
      <p>hello!! you are {state.age}</p>
      <button onClick={decreaseAge} style={{ color: 'blue' }}>
        decrease
      </button>
      <button onClick={() => increaseXAge(3)} style={{ color: 'gray' }}>
        increase x age
      </button>
    </>
  )
}
