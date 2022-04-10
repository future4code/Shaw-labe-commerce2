import React from "react";
import styled from "styled-components";



const ContainerCard = styled.div`

display: flex; 
flex-direction: column;
border: 2px solid black; 
min-width:26%; 
max-width:26%; 
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

//VOU PRECISAR SUBIR NO LOCAL STORAGE PRECO ID E NOME
//FAZER LOCAL STORAGE QUANDO O STARTLAB.JS RENDERIZAR POR PRIMEIRA VEZ
//NOSSOS PRODUTOS SAO FIXOS, ENTAO EU JA SEI OS ID DIFERENTES, E O TAMNHO DA MINHA LISTA DE OBJETOS NO STORAGE




export default class CardProduto extends React.Component {

    // atualizarCarrinho = () => {
    //     let item = this.props.Produto.name; 

    //     let velhoItem = JSON.parse(localStorage.getItem(item));
    //     velhoItem['quantity'] = velhoItem.quantity + 1; 
    //     localStorage.setItem(item, JSON.stringify(velhoItem)); 
    
    // }


    render() {
        let produto = this.props.Produto
        return (
            <ContainerCard>

                <FundoImagemCartao>
                    <ImagemCartao img src={produto.image} />
                </FundoImagemCartao>

                <ConteudoCartao>
                    <p>{produto.name}</p>
                    <p>R$ {produto.price}</p>
                    <BotaoCartao button onClick={() => {this.props.atualizarCarrinho(produto.name)}}>Adicionar ao Carrinho</BotaoCartao>
                </ConteudoCartao>

            </ContainerCard>
        )
    }
}