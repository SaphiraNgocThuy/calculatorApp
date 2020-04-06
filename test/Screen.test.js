import React from 'react';
import * as redux from 'react-redux';
import renderer from 'react-test-renderer';
import Screen from '../src/Screen';

it('renders correctly', () => {
  const useSelector = jest.spyOn(redux, 'useSelector');
  useSelector.mockReturnValue('0');
  const useDispatch = jest.spyOn(redux, 'useDispatch');
  useDispatch.mockReturnValue(jest.fn());

  const tree = renderer.create(<Screen />).toJSON();
  expect(tree).toMatchSnapshot();
});
