import React, { memo, useMemo, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  MainView,
  ResultView,
  ResultText,
  ButtonsView,
  RightSideView,
  LeftSideView,
} from './styles';
import Button from './Button';

const leftSideButtonsList = ['/', '*', '+', '-', '='];
const rightSideButtonsList = ['C', 0, '.', ...[...Array(10).keys()].slice(1)]
  .toString()
  .split(',');

const Screen = () => {
  const value = useSelector((state) => state.value);

  const renderButtons = useCallback((isLeftSide) => {
    const renderList = isLeftSide ? leftSideButtonsList : rightSideButtonsList;
    return [
      renderList.map((title) => (
        <Button key={title} {...{ title, isLeftSide }} />
      )),
    ];
  }, []);
  const renderRightSideButtons = useMemo(() => renderButtons(false), []);
  const renderLeftSideButtons = useMemo(() => renderButtons(true), []);

  return (
    <MainView>
      <ButtonsView>
        <RightSideView>{renderRightSideButtons}</RightSideView>
        <LeftSideView>{renderLeftSideButtons}</LeftSideView>
      </ButtonsView>
      <ResultView>
        <ResultText>{value}</ResultText>
      </ResultView>
    </MainView>
  );
};

export default memo(Screen);
