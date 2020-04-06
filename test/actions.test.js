import {
  ADD_OPERATOR,
  GET_RESULT,
  CLEAR,
  ADD_DOT,
  ADD_NUM,
} from '../src/constants';
import * as actions from '../src/actions';

describe('actions', () => {
  it('should create an action to add number', () => {
    const dispatch = jest.fn();
    const title = '1';
    const expectedAction = {
      type: ADD_NUM,
      input: title,
    };
    expect(actions.addNumber(dispatch, title)).toEqual(
      dispatch(expectedAction)
    );
  });

  it('should create an action to add operator', () => {
    const dispatch = jest.fn();
    const title = '+';
    const expectedAction = {
      type: ADD_OPERATOR,
      input: title,
    };
    expect(actions.addOperator(dispatch, title)).toEqual(
      dispatch(expectedAction)
    );
  });

  it('should create an action to add Dot', () => {
    const dispatch = jest.fn();
    const expectedAction = {
      type: ADD_DOT,
    };
    expect(actions.addDot(dispatch)).toEqual(dispatch(expectedAction));
  });

  it('should create an action to clear', () => {
    const dispatch = jest.fn();
    const expectedAction = {
      type: CLEAR,
    };
    expect(actions.clear(dispatch)).toEqual(dispatch(expectedAction));
  });

  it('should create an action to get result', () => {
    const dispatch = jest.fn();
    const expectedAction = {
      type: GET_RESULT,
    };
    expect(actions.getResult(dispatch)).toEqual(dispatch(expectedAction));
  });
});
