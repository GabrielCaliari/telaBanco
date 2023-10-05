import styled from 'styled-components/native'


export const Container = styled.View`
  background-color: white;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    margin-top: -24px;
    margin-left: 15px;
    margin-right: 15px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 4px;
`;
export const ItemTitle = styled.Text`
    color: #DADADA;
    font-size: 25px;
    font-weight: bold;
    padding-left: 10px;
    padding-top: 10px;
`;
export const Counter = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ItemSymbol = styled.Text`
    padding-left: 10;
    color: #DADADA;
    font-size: 15px;
`;
export const Balance = styled.Text`
    font-size: 30px;
    align-items: center;
    color: green;
    padding-left: 10px;
`;
export const Spending = styled.Text`
    font-size: 30px;
    align-items: center;
    color: red;
    padding-left: 10px;
`;
export const TitleEnd = styled.Text`
    color: #DADADA;
    font-size: 25;
    font-weight: bold;
    padding-left: 10px;
    padding-top: 10;
`;
