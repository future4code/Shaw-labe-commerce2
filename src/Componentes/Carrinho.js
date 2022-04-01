import React from "react";
import styled from "styled-components";
import ListaProdutos from '../data/ProdutosStarLab.json';

const ContainerCarrinho = styled.div`
background-color: #331436; 
flex-grow: 0; 
width: 27%; 
border: 1px solid #bf870d;
color: white;
text-align: center; 

p {
    font-size: 1.5rem; 
    color: white; 
    font-weight: 700;
    
}
`

const ItemNoCarrinho = styled.div`


`


export default class Carrinho extends React.Component{

    state = {
        //variavel de preco total
        valorTotal: 0,
    }

    //passe como props um boolean para aqui, quando eu fizer a lista no storage, mudar


    //ELE QUANDO ESTE COMPONENTE APARECE NA TELA POR PRIMEIRA VEZ


    //PEGAR OBJETOS DO LOCAL STORAGE, SE TIVE QUANTIDADE, MOSTRAR NO CARRINHO
    componentDidMount() 
    {
        //importar produtos
        let produtosStorage = ListaProdutos; 
  
        //iterar por cada produto
        for(let prod of produtosStorage)
        {
            let produtoCarrinho = {id: prod.id, name: prod.name, price: prod.price, quantity: 0}; 
            localStorage.setItem(produtoCarrinho.name, JSON.stringify(produtoCarrinho))
        }
  
    }




    render() {
        //filtrar a lista no storage e mostrar o que tem quantitdae
        //lista dos nomes

        //importar lista de produtos
      let produtos = ListaProdutos; 

      //pegar soh os nomes para puxar do local storage
      let nomesItens = produtos.map( (prod) => {
          return prod.name; 
      })

      
      //puxar cada item do storage em loop, se quantidade for maior que zero guardar


      let cardsNoCarrinho = nomesItens.map ( (nome) => {
          return (JSON.parse(localStorage.getItem(nome)))
      }).filter( (card) => {
          return (card.quantity > 0)
      })

      console.log(cardsNoCarrinho);

     //aqui tenho cards filtrados no carrinho, minimo 1 quantidade
     //tenho no state variavel valorTotal

    //  const renderizarCarrinho = cardsNoCarrinho.map( (card) => {

    //     this.setState({valorTotal: (this.state.valorTotal + (card.quantidade*card.price))});
    //      return (<ItemNoCarrinho> <p> {card.quantidade}x {card.name} <button>Remover</button> </p></ItemNoCarrinho>)
    //  })

     // <div> <p> {cardsNoCarrinho.quantidade}x {cardsNoCarrinho.nome} <button>Remover</button> </p> </div>



    
        return (
            <ContainerCarrinho>
                <p>Carrinho</p>
              
                <p>Valor Total(R$) : {this.state.valorTotal}</p>
            </ContainerCarrinho>
        )
    }
}