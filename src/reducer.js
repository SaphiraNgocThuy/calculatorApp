import {
  GET_RESULT,
  ADD_NUMBER,
  ADD_OPERATOR,
  CLEAR,
  ADD_DOT,
} from './constants';

export const initialState = {
  calculation: '',
  value: 0,
  operator: null,
  dotted: false,
  clickedEqual: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  const { value, operator, dotted, calculation, clickedEqual } = newState;

  switch (action.type) {
    case ADD_NUMBER:
      if (!clickedEqual) {
        if (!operator && (!value || !calculation)) {
          newState.value = action.input;
        } else if (operator) {
          newState.calculation += operator;
          newState.value = action.input;
          newState.operator = null;
        } else newState.value += action.input;
        newState.calculation += action.input;
      } else {
        newState.calculation = action.input;
        newState.value = action.input;
        newState.clickedEqual = false;
      }
      return newState;
    case ADD_OPERATOR:
      if (operator !== action.input) newState.operator = action.input;
      newState.dotted = false;
      newState.clickedEqual = false;
      return newState;
    case ADD_DOT:
      if (!dotted) {
        newState.value = value + '.';
        newState.calculation = calculation + '.';
        newState.dotted = true;
      }
      return newState;
    case GET_RESULT:
      if (/^[/*]/.test(calculation)) newState.calculation = '0' + calculation;
      newState.value = eval(newState.calculation);
      newState.clickedEqual = true;
      return newState;
    case CLEAR:
      return { ...initialState };

    default:
      return newState;
  }
};

export default reducer;
