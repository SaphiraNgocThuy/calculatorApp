import React from 'react';
import * as redux from 'react-redux';
import renderer from 'react-test-renderer';
import Button from '../src/Button';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
describe('actions', () => {
  it('renders correctly', () => {
    const useDispatch = jest.spyOn(redux, 'useDispatch');
    useDispatch.mockReturnValue(jest.fn());

    const tree = renderer.create(<Button title="1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('call add number if press number button ', () => {
    Enzyme.configure({ adapter: new Adapter() });
    const useDispatch = jest.spyOn(redux, 'useDispatch');
    useDispatch.mockReturnValue(jest.fn());
    const addNumber = jest.fn();
    const dispatch = jest.fn();
    const title = '1';
    const button = shallow(<Button title={title} />);
    button.props().onPress();

    expect(addNumber).toHaveBeenCalledWith(dispatch, title);
  });
});
