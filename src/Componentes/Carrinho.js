import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
background-color: #331436; 
flex-grow: 0; 
width: 20%; 
border: 1px solid #bf870d;
color: white;

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