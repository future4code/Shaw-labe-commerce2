import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";
import ListaProdutos from '../data/ProdutosStarLab.json'

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
        produtos: ListaProdutos, //recebe a lista de produtos do JSON salvo em nosso arquivo data, importado como ListaProdutos
       
    }


    render() {

       //pegando valores dos filtros do Pai, e ja jogando o valor do filtro escrito para lowercase
       let filtroMinimo = this.props.filtroMinimo; 
       let filtroMaximo = this.props.filtroMaximo; 
       let filtroNome = this.props.filtroNome.toLowerCase();  
 
        
        //Filtramos os produtos primeiramente pelo filtro minimo, e depois pelo valor maximo
        //tenha em consideracão que a logica || !filtroMaximo significa "ou se filtroMaximo estiver em branco, retorne o produto"
        // ele vai retornar todo produto (prod) que marcar como true o que estiver no return

        let produtosFiltradosMinMax = this.state.produtos.filter( (prod) => {
            return (prod.price >= filtroMinimo)}
        ).filter ( (prod) => { return prod.price <= filtroMaximo || !filtroMaximo})

        //produtos Filtrados para renderizar
        let produtosFiltrados = [...produtosFiltradosMinMax];

        //se existir algum texto no campo de filtro por nome
        if(filtroNome !== "")
        {
            //redefinir produtos filtrados para ver se o nome bate
            produtosFiltrados = produtosFiltradosMinMax.filter( (prod) => {
                return( prod.name.toLowerCase().includes(filtroNome))
            })
        }
    
        //renderizaramos os produtos que sobraram os filtros, mandando os produtos em lista usando map, 
        //cada item da lista sendo formatado em card, encaixando o produto nas tags <CardProduto>
        //observe que usamos o id do produto como key pro react, para não dar ruim

        let produtosRenderizados = produtosFiltrados.map( (produto) => {
            return ( <CardProduto key={produto.id} Produto = {produto}> </CardProduto>)
        })

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