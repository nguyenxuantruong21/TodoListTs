export type ActionType = IncreaseAgeAction | DecreaseAgeAction | IncreaseXAgeAction

export type IncreaseAgeAction = { type: 'increase_age' }
export type DecreaseAgeAction = { type: 'decrease_age' }
export type IncreaseXAgeAction = { type: 'increase_x_age'; payload: number }

export const increaseAgeAction = () => {
  return { type: 'increase_age' } as IncreaseAgeAction
}

export const decreaseAgeAction = () => {
  return { type: 'decrease_age' } as DecreaseAgeAction
}

export const increaseXAgeAction = (payload: number) => {
  return { type: 'increase_x_age', payload } as IncreaseXAgeAction
}
