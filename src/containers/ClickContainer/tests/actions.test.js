import { INCREMENT, DECREMENT } from '../constant';
import { incrementAction, decrementAction } from '../action';

describe('clickCounter test expected click', () => {
  it('test increment click', () => {
    const expectedAction = {
      type: INCREMENT,
    };
    expect(incrementAction()).toEqual(expectedAction);
  });

  it('test decrement click', () => {
    const expectedAction = {
      type: DECREMENT,
    };
    expect(decrementAction()).toEqual(expectedAction);
  });
});