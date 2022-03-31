import React from "react";
import styled from "styled-components";


const ContainerCard = styled.div`

display: flex; 
flex-direction: column;
border: 2px solid black; 
min-width:30%; 
max-width:30%; 
height: 45vh;
margin-left: 0.2%; 
margin-right: 0.2%; 
margin-top: 2%; 
`

//RECEBE COMO PROPS OBJETO PRODUTO
//ACESSAR COM produto = this.props.Produto
//cada produto tem: id, name, price, e image



export default class CardProduto extends React.Component{

    
   

    render() {
        let produto = this.props.Produto
        return (
            <ContainerCard>
                <p>EU SOU O CARD DO {produto.name}</p>
                <p>MEU PREÇO {produto.price}</p>
            </ContainerCard>
        )
    }
}