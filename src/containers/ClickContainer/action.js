import { INCREMENT , DECREMENT } from '../ClickContainer/constant';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decrementAction() {
  return {
    type: DECREMENT,
  };
}
