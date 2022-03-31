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
min-height:70vh;
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

    //RECEBE DE PROP PRODUTO

    state = { 
        produtos: [...this.props.produtos],
    }

    //FAZER ON MOUNT GUARDAR PRODUTOS

    render() {

          // Passar array PRODUTOS por filtros escolhidos, para decidir o que renderizar
        //array de copia para nao mexer com dados originais
        let produtosParaFiltrar = [...this.state.produtos]; 
        console.log("produtosParaFiltrar", produtosParaFiltrar)

        //array de produtos filtrados, primeiro filtrar valores maiores que filtro minimo, e depois filtrar menores que filtro maximo
        let produtosFiltrados = produtosParaFiltrar.filter ( (prod) => {   return prod.price > this.state.filtroMinimo}
        )//.filter( (prod) => { return (prod.price <= this.state.filtroMaximo)});

        console.log("produtosFiltrados", produtosFiltrados)

        //Só filtramos com nome, se o input de filtro de nome tiver algo escrito
        if(this.state.filtroNome)
        {
            let produtosFiltradosPorNome = produtosFiltrados.filter( (produto) => { return (produto.nome.includes(this.state.filtroNome))});
            produtosFiltrados = [...produtosFiltradosPorNome]; 
        }

        //renderizar produtos

        let produtosRenderizados = produtosFiltrados.map( (produto) => {
            return ( <CardProduto Produto = {produto}></CardProduto>)
        })

        console.log("Produtos Renderizados", produtosRenderizados)

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
                 {produtosRenderizados}
                </ProdutosCardContainer>

            </ContainerProdutos>
        )
    }
}