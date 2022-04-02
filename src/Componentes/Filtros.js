import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
display: flex; 
flex-direction: column; 
background-color: #331436 ; 
flex-grow: 0; 
width: 25%; 
align-items: center; 
border: 1px solid #bf870d;

//#331436 #bf870d #272134
p {
    font-size: 1.5rem; 
    color: white; 
    font-weight: 700;
}
`

const CampoDeFiltro = styled.div`

display: flex;
flex-direction: column;
color: white; 
text-align: center; 
padding-bottom: 10%; 

label {
    padding-bottom: 5%;
}

input {
    color: #331436;
}

`

//.......:::::::::::::::::::PROPS::::::::::::::::::::......
//=========================================================
//produtos = array com objetos de produto //cada produto tem: id, nome, preco, e imagem

//inputFiltroMinimo = jogar pro pai (StarLab.js) capturar o valor dentra da input
//inputFiltroMaximo = jogar pro pai (StarLab.js) capturar o valor dentra da input
//inputFiltroNome = jogar pro pai (StarLab.js) capturar o valor dentra da input

//filtroMinimo = valor capturado do pai (StarLab.js) jogado para aqui
//filtroMaximo = valor capturado do pai (StarLab.js) jogado para aqui
//filtroNome = valor capturado do pai (StarLab.js) jogado para aqui




export default class Filtros extends React.Component{
    render() {
        return (
            <ContainerFiltro>
                <p>Filtrar Produtos</p>
               
                <CampoDeFiltro>
                    <label>Valor Minimo (R$)</label>
                    <input  type="text" onChange={this.props.inputFiltroMinimo} value = {this.props.filtroMinimo}/>
                </CampoDeFiltro>

                <CampoDeFiltro>
                    <label>Valor Maximo (R$)</label>
                    <input placeholder= "" type="text" onChange={this.props.inputFiltroMaximo} value = {this.props.filtroMaximo}/>
                </CampoDeFiltro>

                <CampoDeFiltro>
                    <label>Filtrar por Nome</label>
                    <input placeholder= "Nome de Produto" type="text" onChange={this.props.inputFiltroNome} value = {this.props.filtroNome}/>
                </CampoDeFiltro>
                
            </ContainerFiltro>
        )
    }
}