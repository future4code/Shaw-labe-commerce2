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
    font-size: 1rem; 
    color: white; 
    font-weight: 700;
    
}
`

const ItemNoCarrinho = styled.div`


`

//usar storage soh para guardar estado atual do carrinho, vou ter que passar como state do Starlab quantidade de produto
export default class Carrinho extends React.Component{

    state = {
        //variavel de preco total
        firstMount: true,
        valorTotal: 0,

    }

    //passe como props um boolean para aqui, quando eu fizer a lista no storage, mudar


    //ELE QUANDO ESTE COMPONENTE APARECE NA TELA POR PRIMEIRA VEZ


    //PEGAR OBJETOS DO LOCAL STORAGE, SE TIVE QUANTIDADE, MOSTRAR NO CARRINHO
    // componentDidMount() 
    // {
    //     if(this.state.firstMount) {
    //         //importar produtos
    //         let produtosStorage = ListaProdutos; 
      
    //         //iterar por cada produto
    //         for(let prod of produtosStorage)
    //         {
    //             let produtoCarrinho = {id: prod.id, name: prod.name, price: prod.price, quantity: 0}; 
    //             localStorage.setItem(produtoCarrinho.name, JSON.stringify(produtoCarrinho))
    //         }

    //         this.setState({firstMount: false}); 
    //     }
  
    // }






    render() {
        //filtrar a lista no storage e mostrar o que tem quantitdae
        //lista dos nomes

        //importar lista de produtos
      let produtos = this.props.produtosNoCarrinho; 



      
      //puxar cada item do storage em loop, se quantidade for maior que zero guardar

      let total = 0; 

        //filtrar itens com quantidade zero
    let filtrarCarrinho = produtos.map( (item) => {
        return (item)
    }).filter( (item) => {
        return( item.quantity> 0)
    })

     let renderizarCarrinho = filtrarCarrinho.map( (card) => {
        // console.log("Estou dentro do renderizar Carrinho", card, card.price);
         total+=(card.quantity*card.price);
         return (<ItemNoCarrinho key={card.id}> <p> {card.quantity}x {card.name} <button onClick={() => this.props.removeItem(card.id)} >Remover</button> </p></ItemNoCarrinho>)
     })
     console.log(total)
     // <div> <p> {cardsNoCarrinho.quantidade}x {cardsNoCarrinho.nome} <button>Remover</button> </p> </div>



    
        return (
            <ContainerCarrinho>
                <p>Carrinho</p>
                {renderizarCarrinho}
                <p>Valor Total(R$) : {total}</p>
            </ContainerCarrinho>
        )
    }
}