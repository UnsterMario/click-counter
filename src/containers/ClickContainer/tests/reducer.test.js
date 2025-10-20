import clickCounterReducer from '../reducer';
import { INCREMENT, DECREMENT } from '../constant';

describe('clickCounter react tests', () => {
  const initialState = {
    counter: 0,
  };
  it('start project', () => {
    expect(clickCounterReducer(undefined, {})).toEqual(initialState);
  });

  it('decrement by 1', () => {
    const initialStateDecrement = {
        counter: 1,
      };
    const action = { type: DECREMENT };
    const expectedState = { counter: initialStateDecrement.counter - 1 };
    expect(clickCounterReducer(initialStateDecrement, action)).toEqual(expectedState);
  });

  it('increment by 1', () => {
    const action = { type: INCREMENT };
    const expectedState = { counter: initialState.counter + 1 };
    expect(clickCounterReducer(initialState, action)).toEqual(expectedState);
  });
  
  it('counter has to be positive', () => {
    const action = { type: DECREMENT };
    const expectedState = { counter: initialState.counter };
    expect(clickCounterReducer(initialState, action)).toEqual(expectedState);
  });
});