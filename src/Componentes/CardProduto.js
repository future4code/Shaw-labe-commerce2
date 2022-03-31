import React from "react";
import styled from "styled-components";
import imgArmored from "../Imagens/ArmoredHanSolo.png"
import imgBobaFett from "../Imagens/BobaFett.png"
import imgChewbacca from "../Imagens/Chewbacca.png"
import imgDarthVader from "../Imagens/DarthVader.png"
import imgHanSolo from "../Imagens/HanSolo.png"
import imgStormtrooper from "../Imagens/Stormtrooper.png"


const ContainerCard = styled.div`

display: flex; 
flex-direction: column;
border: 2px solid black; 
min-width:29%; 
max-width:29%; 
height: 60vh;
margin-left: 0.2%; 
margin-right: 0.2%; 
margin-top: 2%; 
`



const ImagemCartao = styled.img`
width: 40%;
height: 60%;
align-self: center;
`

const BotaoCartao = styled.button`
width: 50%;
`


//RECEBE COMO PROPS OBJETO PRODUTO
//ACESSAR COM produto = this.props.Produto
//cada produto tem: id, name, price, e image



export default class CardProduto extends React.Component {

    render() {
        let produto = this.props.Produto
        return (
            <ContainerCard>
                <ImagemCartao img src={imgArmored} />
                <p>{produto.name}</p>
                <p>R$ {produto.price}</p>
                <button>Adicionar ao Carrinho</button>
            </ContainerCard>
        )
    }
}