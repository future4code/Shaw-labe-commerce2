import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
background-color: green; 
flex-grow: 0; 
width: 20%; 

`



export default class Filtros extends React.Component{
    render() {
        return (
            <ContainerFiltro>
                EU SOU O FILTRO
            </ContainerFiltro>
        )
    }
}