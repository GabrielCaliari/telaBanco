import React from 'react';
import { Balance, Container, Counter, ItemSymbol, ItemTitle, Spending, TitleEnd } from './style';
import { View } from 'react-native';

 const Middle = ({valor, restante}) => {
 return (
   <Container>
    <View >
      <ItemTitle>Saldo</ItemTitle>
      <Counter>
        <ItemSymbol>R$</ItemSymbol>
        <Balance>{valor}</Balance>
      </Counter>
    </View>
    <View >
      <TitleEnd>Gastos</TitleEnd>
      <Counter>
        <ItemSymbol>R$</ItemSymbol>
        <Spending>{restante}</Spending>
      </Counter>
    </View>
   </Container>
  );
}

export default Middle
