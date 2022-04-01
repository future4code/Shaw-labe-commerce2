import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";
import ListaProdutos from '../data/ProdutosStarLab.json'
import Background from '../Imagens/Background.jpg'

const ContainerProdutos = styled.div`
background-color: #331436; 
display: flex; 
flex-direction: column; 
flex-grow: 1; 
border: 1px solid #bf870d;
`

const OrdenarProdutos = styled.div`
display: flex; 
flex-direction: row;
justify-content: space-between; 
align-items: center;
height: 7vh;
width: 100%;
flex-grow: 0; 
/* margin: 0 2% 0 2%;  */
color: #bf870d;

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
background:url(${Background}); 
flex-grow: 1; 
padding-bottom: 3%;
flex-wrap: wrap;
border: 1px solid #bf870d;
`

const OrdenarSelecao = styled.div`
display: flex; 
flex-direction: row; 
/* align-items: center;  */
justify-content: space-evenly; 
padding-right: 5%;
width: 15%; 

p {
    padding-right: 5%;
}
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
        //se order = 1, ordem de valor minimo primeiro, se -1 valor maximo primeiro
        order: 1,  
    }
    //VOU PRECISAR SUBIR NO LOCAL STORAGE PRECO ID E NOME
    //FAZER LOCAL STORAGE QUANDO O STARTLAB.JS RENDERIZAR POR PRIMEIRA VEZ
    //NOSSOS PRODUTOS SAO FIXOS, ENTAO EU JA SEI OS ID DIFERENTES, E O TAMNHO DA MINHA LISTA DE OBJETOS NO STORAGE

   //SUBIR QUANDO FOR RENDERIZADO A PRIMEIRA VEZ
 


    //função de ordenar produtos
    ordemDeProdutos = (event) => {
        if (event.target.value === "crescente") {
        this.setState({order: 1}); //positivo
        }
        else 
        {
            this.setState({order: -1}) //negativo
        }
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
        ).filter ( (prod) => { return prod.price <= filtroMaximo || !filtroMaximo}
        ).sort( (prod, nextProd) => {
            return this.state.order* (prod.price - nextProd.price); //negativo = TRUE NAO MUDA NADA
        } )
                                //ATUAL TEM VALOR 100 PROX 150   -50,   
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
                      <p>Quantidade de Produtos: {produtosRenderizados.length}</p> 
                </div>
                 <OrdenarSelecao>
                     <p>Ordenação: </p> 
                      <select
                      onChange={this.ordemDeProdutos}
                      >
                        <option value="crescente" >Valor Minimo</option>
                        <option value="decrescente">Valor Maximo</option>
                    </select> 
                  </OrdenarSelecao>
                </OrdenarProdutos>

                <ProdutosCardContainer>
                 {produtosRenderizados }
                </ProdutosCardContainer>

            </ContainerProdutos>
        )
    }
}