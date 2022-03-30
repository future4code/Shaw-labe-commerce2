import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
background-color: grey; 
flex-grow: 0; 
width: 20%; 

`


export default class Carrinho extends React.Component{
    render() {
        return (
            <ContainerCarrinho>
                EU SOU O CARRINHO
            </ContainerCarrinho>
        )
    }
}