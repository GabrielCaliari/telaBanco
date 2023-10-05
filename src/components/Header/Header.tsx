import React from 'react';
 import { Feather } from "@expo/vector-icons"
import { ButtomUser, Container, Content, UserName } from './styles';
import { MotiView, MotiText }from 'moti'
import { color } from 'react-native-reanimated';
import {StyleSheet} from 'react-native'

 const Header = ({name}) => {
 return (
   <Container>
    <Content>
          <UserName>{name}</UserName>
          <ButtomUser activeOpacity={0.9} >
            <Feather name="user" size={35} color="white"/>
          </ButtomUser>
    </Content>
   </Container>
  );
}


export default Header
