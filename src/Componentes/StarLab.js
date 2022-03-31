import React from 'react';
import styled from 'styled-components'
import Filtros from './Filtros';
import Produtos from './Produtos';
import Carrinho from './Carrinho';
import CardProduto from './CardProduto';

//ESTILIZAÇÃO DE MAIN
const Main = styled.div`

display: flex; 
width: 100%; 
background-color: pink; 
flex-grow: 1; // FLEX-GROW ZERO FICA FIXO, 1 ELE CRESCE SOZINHO
`;


//STARLAB É O CONTAINER PRINCIPAL, PAI UNICO DE: 
// 1. FILTROS 
// 2. PRODUTOS -> FILHO: 3.CARD PRODUTO
// 4. CARRINHO

export default class Starlab extends React.Component 
{
    //objeto principal de state do pai, contem a maioria das informacoes
    state = {
        //array de produtos, cada produto tem: id, nome, preco, e imagem
        produtos: [
            {
                id: 1, name: "Produto 1", 
                price: 100, 
                image: "",
            },
            {
                id: 2,
                name: "Produto 2", 
                price: 5, 
                image: "",
            },
            {
                id: 3,
                name: "Produto 3", 
                price: 87, 
                image: "",
            },
            {
                id: 4,
                name: "Produto 4", 
                price: 250, 
                image: "",
            },

        ],

        filtroMinimo: 0,
        filtroMaximo: 5000000,
        filtroNome: "",
    }

    render() {

      


        return (
            <Main>

               <Filtros
                inputFiltroMinimo = {(event) => this.setState({filtroMinimo: event.target.value})}
                inputFiltroMaximo = {(event) => this.setState({filtroMaximo: event.target.value})}
                inputFiltroNome = {(event) => this.setState({filtroNome: event.target.value})}
                filtroMinimo = {this.state.filtroMinimo}
                filtroMaximo = {this.state.filtroMaximo}
                filtroNome = {this.state.filtroNome}
               />

               <Produtos produtos = {this.state.produtos}>

               </Produtos>

                <Carrinho>

                </Carrinho>


            </Main>


        )
    }
}