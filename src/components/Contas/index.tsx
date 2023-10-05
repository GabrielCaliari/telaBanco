import React, {useState} from "react";
import { isStyledComponent } from 'styled-components'
import {  Date, Expenses, Label, TO, Value, Valuee, View, Transparent} from "./style";
import { Text, StyleSheet } from "react-native";

export interface TextType {
  newColor: string | boolean
}

const Contas = ({data}) => {
  const [showValue, setShowValue] = useState(false);

  return(
      <TO onPress={() => setShowValue(!showValue)}>
        <Date>{data.date}</Date>
      <View>
        <Label>{data.label}</Label>
       { showValue ? (
         <Value newColor={data.type === 1 ? 'green' : 'red'}>
         {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
         </Value>
       ) : (
        <Transparent>
        </Transparent>
       )}
      </View>
      </TO>
  )
}

export default Contas;
