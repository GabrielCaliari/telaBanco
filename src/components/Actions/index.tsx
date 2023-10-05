import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons"
import { AntDesign } from '@expo/vector-icons';
import { ActionsButton, Button, Container, TextButton } from "./style";

const Actions = () => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>

      <Button >
      <ActionsButton>
      <AntDesign name="addfolder" size={35} color="black" />
      </ActionsButton>
      <TextButton>Entradas</TextButton>
      </Button>

      <Button >
      <ActionsButton>
      <AntDesign name="tagso" size={35} color="black" />
      </ActionsButton>
      <TextButton>Compras</TextButton>
      </Button>

      <Button >
      <ActionsButton>
      <AntDesign name="creditcard" size={35} color="black" />
      </ActionsButton>
      <TextButton>Carteira</TextButton>
      </Button>

      <Button >
      <ActionsButton>
      <AntDesign name="barcode" size={35} color="black" />
      </ActionsButton>
      <TextButton>Boletos</TextButton>
      </Button>

      <Button >
      <ActionsButton>
      <AntDesign name="setting" size={35} color="black" />
      </ActionsButton>
      <TextButton>Conta</TextButton>
      </Button>



    </Container>
  )

}

export default Actions;
