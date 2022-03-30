import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`

display: flex; 
border: 2px solid black; 
min-width:30%; 
max-width:30%; 
height: 45vh;
margin-left: 0.2%; 
margin-right: 0.2%; 
margin-top: 2%; 
`


export default class CardProduto extends React.Component{
    render() {
        return (
            <ContainerCard>
                EU SOU O CARD DO PRODUTO
            </ContainerCard>
        )
    }
}