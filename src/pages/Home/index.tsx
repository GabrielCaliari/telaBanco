import React from 'react';

import Header from '../../components/Header/Header';
import Middle from '../../components/Middle/Middle';
import Actions from '../../components/Actions';
import Contas from '../../components/Contas';

import { Container, List,  Title } from './style';

 const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '17/08/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix cliente',
    value: '2.500,00',
    date: '22/09/2023',
    type: 1 //receita / entradas
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.000,00',
    date: '03/10/2023',
    type: 1 //receita / entradas
  },

]

export default function Home() {
 return (
   <Container>
    <Header name="Gabriel Caliari" />
    <Middle valor="9.550,00" restante="300,90"/>
    <Actions />
    <Title>Ultimas movimentações:</Title>
    <List
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Contas data={item}/>}
      />
   </Container>
  );
}

