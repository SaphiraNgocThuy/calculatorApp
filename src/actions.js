import { ADD_NUM, ADD_OPERATOR, ADD_DOT, CLEAR, GET_RESULT } from './constants';

export const addNumber = (dispatch, title) => {
  dispatch({
    type: ADD_NUM,
    input: title,
  });
};

export const addOperator = (dispatch, title) => {
  dispatch({
    type: ADD_OPERATOR,
    input: title,
  });
};

export const addDot = (dispatch) => {
  dispatch({
    type: ADD_DOT,
  });
};

export const clear = (dispatch) => {
  dispatch({
    type: CLEAR,
  });
};

export const getResult = (dispatch) => {
  dispatch({
    type: GET_RESULT,
  });
};
