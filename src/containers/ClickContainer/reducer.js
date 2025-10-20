import { DECREMENT, INCREMENT } from '../ClickContainer/constant';

export const initialState = {
  counter: 0,
};

export default function homeContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
    case DECREMENT:
      return {
        ...state,
        counter: Math.max(0, state.counter - 1),
      };
  }
}
