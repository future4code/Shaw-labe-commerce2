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
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`

const FundoImagemCartao = styled.div`
background-color: #dadfe8;
width: 100%;
height: 60%;
`

const ImagemCartao = styled.img`
display: block;   
width: 40%;
height: 100%;
margin-left: auto;   
margin-right: auto;
`

const BotaoCartao = styled.button`
width: 40%;
height: 25%;
background-color: #FFFFFF;
color: black;
`

const ConteudoCartao = styled.div`
width: 100%;
height: 40%;
background-color: #272134;
text-align: center;
justify-content: center;
color: #bf870d;
`


//RECEBE COMO PROPS OBJETO PRODUTO
//ACESSAR COM produto = this.props.Produto
//cada produto tem: id, name, price, e image



export default class CardProduto extends React.Component {

    render() {
        let produto = this.props.Produto
        return (
            <ContainerCard>

                <FundoImagemCartao>
                    <ImagemCartao img src={imgArmored} />
                </FundoImagemCartao>

                <ConteudoCartao>
                    <p>{produto.name}</p>
                    <p>R$ {produto.price}</p>
                    <BotaoCartao button>Adicionar ao Carrinho</BotaoCartao>
                </ConteudoCartao>

            </ContainerCard>
        )
    }
}