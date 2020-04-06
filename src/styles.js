import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const PADDING = 5;

export const MainView = styled.View`
  flex: 1;
  align-items: flex-end;
  flex-direction: column-reverse;
`;

export const ResultView = styled.View`
  padding: ${PADDING * 2}px;
  align-items: flex-end;
`;

export const ButtonsView = styled.View`
  padding: ${PADDING}px ${PADDING}px 30px;
  flex-direction: row;
`;

export const LeftSideView = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RightSideView = styled.View`
  flex: 3;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-content: stretch;
`;

export const ButtonView = styled.View`
  padding: ${PADDING}px;
  flex-grow: 1;
`;

export const StyledButton = styled(TouchableOpacity)`
  margin: ${PADDING}px;
  padding: ${PADDING}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-basis: ${(props) => (props.isLeftSide ? 100 : 29)}%;
  flex-shrink: 1;
  flex-grow: 1;
  background-color: lightgray;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
`;

export const ResultText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 40px;
`;
