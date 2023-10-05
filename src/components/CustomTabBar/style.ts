
import styled from "styled-components/native";
import { ViewType } from ".";

export const Container = styled.View`
  justify-content: center;
  align-items: center
`;
export const SecondView = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background-color: rgba(255,255,255, 0.9);
  gap: 8px;
  border-radius: 99px;
`;

export const ButtonTab = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

`;

export const ButtonView = styled.View`
  align-items: center;
  padding: 4px
`;


export const ThirdView = styled.View<ViewType>`
  padding: 8px;
  background-color: ${props => `${props.backgroundColor}`};
  border-radius: 99px
`;

export const ContainerButton = styled.View`
  align-items: center;
  padding: 4px;
`;



