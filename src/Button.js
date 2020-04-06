import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ButtonView, StyledButton, ButtonText } from './styles';
import { useDispatch } from 'react-redux';
import { addNumber, addOperator, clear, getResult, addDot } from './actions';

const Button = ({ title, isLeftSide }) => {
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    if (/\d/.test(title)) {
      addNumber(dispatch, title);
    } else if (/[\+\-\*\/]/.test(title)) {
      addOperator(dispatch, title);
    } else if (/\=/.test(title)) {
      getResult(dispatch);
    } else if (/C/.test(title)) {
      clear(dispatch);
    } else {
      addDot(dispatch);
    }
  }, [title]);

  return (
    <StyledButton {...{ onPress, isLeftSide }}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isLeftSide: PropTypes.bool,
};

export default memo(Button);
