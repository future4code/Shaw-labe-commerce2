import React from 'react';
import styled from 'styled-components'
import Filtros from './Filtros';
import Produtos from './Produtos';
import Carrinho from './Carrinho';
import CardProduto from './CardProduto';
import ListaProdutos from '../data/ProdutosStarLab.json'

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

        //valores dos campos de Filtros, obtidos do Filtros.js filho do StarLabs.js (este arquivo)
        filtroMinimo: "",
        filtroMaximo: "",
        filtroNome: "",
        produtos: ListaProdutos, 

        //state para controlar produtos no carrinho com quantidade
        produtosNoCarrinho: [],

    }

    //process card Click pro carrinho
    processCardClick = (name) => {
        let myProducts = [...this.state.produtos]; 
        let myCard = myProducts.filter( (prod) => {
            return (prod.name === name)
        })
        //processo card click no starlabs
        console.log(name, "card clicked", myCard)
        let cardNotOnCart = true;
        let updatedProducts;
        //se produtos no carrinho existir
        if (this.state.produtosNoCarrinho) {
         updatedProducts = this.state.produtosNoCarrinho.map ( (card) =>
            {
                if (card.name === name)
                {
                    cardNotOnCart = false; 
                    card.quantity++;
                }
                return (card)
        })
        }
        //adiciona no carrinho com quantitade atualizada
        if (!cardNotOnCart) 
        {
            this.setState({produtosNoCarrinho: updatedProducts});
        }
        //adiciona no carrinho por primeira vez
        else {
           
            let novoCarrinho = [];   
            let novoItemNoCarrinho = {id: myCard[0].id, name: myCard[0].name, price: myCard[0].price, quantity: 1};
            if (this.state.produtosNoCarrinho.length === 0) {
                novoCarrinho.push(novoItemNoCarrinho);
                this.setState({produtosNoCarrinho: novoCarrinho})
          
            }
            else 
            {
                novoCarrinho = [...this.state.produtosNoCarrinho, novoItemNoCarrinho]
                this.setState({produtosNoCarrinho: novoCarrinho}); 
            }
            
        }

        
    }



 


 

    render() {

        //renderizando o componente Produtos (Produtos.js), botando em variavel para sempre renderizar
        let meusProdutos = (<Produtos
        filtroMinimo={ this.state.filtroMinimo} //prop de valor minimo do filtro
        filtroMaximo={this.state.filtroMaximo} //prop de valor maximo do filtro
        filtroNome={this.state.filtroNome } //prop de nome do filtro
        cardClick={(name) => this.processCardClick(name)}
        />)

        console.log("iten no carrinho", this.state.produtosNoCarrinho)

             /* ::::::::::::::::::::::::::::::::::::::::: PROPS DE <Filtros> :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Os campos de inputs dentro do Filtro.js sao redireccionados do evento OnChange do filho (Filtro.js) para o Pai StarLabs.js, 
                a arrow function esta diretamente atualizando os valores usando o this.setState em quanto o usuario escreve aqui no arquivo pai 
                (StarLabs.js)para os valores do nosso state: filtroMinimo, filtroMaximo e filtroNome 

                Os valores passados filtroMinimo, filtroMaximo, e filtroNome tem que ser mandados para atualizar o input no filho
                Filtro.js, justamente porque precisamos ler os valores dele aqui no Pai, se não mandar os valores de volta, o campo não atualiza
                ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                */
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
              {meusProdutos}
                

              
                <Carrinho
                produtosNoCarrinho = {this.state.produtosNoCarrinho}
                >

                </Carrinho>


            </Main>


        )
    }
}