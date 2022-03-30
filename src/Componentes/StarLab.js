import React from 'react';
import styled from 'styled-components'
import Filtros from './Filtros';
import Produtos from './Produtos';
import Carrinho from './Carrinho';

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

export default class PaiComp extends React.Component 
{


    render() {
        return (
            <Main>
               <Filtros>

               </Filtros>

               <Produtos>

               </Produtos>

                <Carrinho>

                </Carrinho>


            </Main>


        )
    }
}