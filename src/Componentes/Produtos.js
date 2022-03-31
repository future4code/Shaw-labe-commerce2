import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";

const ContainerProdutos = styled.div`
background-color: blanchedalmond; 
display: flex; 
flex-direction: column; 
flex-grow: 1; 
`

const OrdenarProdutos = styled.div`
display: flex; 
flex-direction: row;
justify-content: space-between; 
align-items: center;
height: 7vh;
width: 100%; 
background-color: yellow; 
flex-grow: 0; 
/* margin: 0 2% 0 2%;  */

div {
    padding-left: 4%;
}

`

const ProdutosCardContainer = styled.div`
display:flex; 
/* flex-direction: column;  */
max-width:100%; 
justify-content: space-evenly;
background-color: orange; 
flex-grow: 1; 
padding-bottom: 3%;
flex-wrap: wrap;
`




const OrdenarSelecao = styled.div`
display: flex; 
flex-direction: row; 
/* align-items: center;  */
justify-content: space-evenly; 
padding-right: 5%;
width: 15%; 


// ..:::::: MUDAR DEPOIS :::::::::......
select {
    align-self: center; 
    height: 1.5rem; 
}
`
//COMPONENTE CARD PRODUTO É FILHO 

export default class Produtos extends React.Component{
    render() {
        return (
            <ContainerProdutos>
               
                <OrdenarProdutos>
                 <div> 
                      <p>Quantidade de Produtos   --- EU SOU O CONTAINER PRODUTOS</p> 
                </div>
                 <OrdenarSelecao>
                     <p>Ordenação: </p> 
                      <select>
                          Crescente
                        <option>Decrescente</option>
                        <option>Crescente</option>
                    </select> 
                  </OrdenarSelecao>
                </OrdenarProdutos>

                <ProdutosCardContainer>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                </ProdutosCardContainer>

            </ContainerProdutos>
        )
    }
}