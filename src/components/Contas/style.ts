import styled  from "styled-components/native";
import { TextType } from ".";



export const TO = styled.TouchableOpacity`
   flex: 1px;
  margin-bottom: 24px;
  border-bottom-width: 0.5px;
  border-bottom-color: gray;
`;

export const View = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const Date = styled.Text`
  color: gray;
  font-weight: bold;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Value = styled.Text<TextType>`
  font-weight: bold;
  font-size: 16px;
  color: ${props => `${props.newColor}`};
`;

export const Expenses = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: red;
`;

export const Valuee = styled.Text<TextType>`
  font-weight: bold;
  font-size: 16px;
  color: green;
`;

export const Transparent = styled.View`
  margin-top: 6px;
  width: 80px;
  height: 10px;
  background-color: #DADADA;
  border-radius: 8px;
`;
