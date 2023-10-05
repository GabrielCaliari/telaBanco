
import styled from 'styled-components/native'

import { color } from 'react-native-reanimated'


export const Container = styled.View`
    padding-top: 50px;
    padding-bottom: 30px;
    background-color: purple;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
`;
export const Content = styled.View`
    flex: 1;
    align-items: center;
    padding-bottom: 15px;
    flex-direction: row;
    justify-content: space-between;
`;
export const UserName = styled.Text`
   color: white;
   font-weight: bold;
   font-size: 20px;
`;
export const ButtomUser = styled.TouchableOpacity`
    width: 47px;
    height: 47px;
    background-color: gray;
    justify-content: center;
    flex-direction: row;
    border-radius: 22px;
    align-items: center;
`;

