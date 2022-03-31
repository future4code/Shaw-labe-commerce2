import React from 'react';
import styled from 'styled-components'
import StarLab from './Componentes/StarLab';
import img from './Imagens/StarLab-Logo.png'

//CONTAINER PRINCIPAL
const Pai = styled.div`
display: flex; 
flex-direction: column; 
width: 100vw; 
background-color: grey; 
`;

//ESTILIZAÇÃO DE HEADER
const Header = styled.div`
display: flex; 
background-color: #272134;
width: 100%; 
height: 10vh; 
flex-grow: 0; //PARA MANTER ALTURA FIXA
justify-content: center;
align-items: center;
`;

const LogoDiv = styled.div`
  width: 7%;
  height: 71%;
  background-color: #bf870d;
  border-radius: 15%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const Logo = styled.img`
    width: 97%;
    height: 97%;
    margin-top: 0.7%;
    margin-left: 2%;
    background-color: #272134;
    border-radius: 15%;

`;


const Footer = styled.div`
display: flex;
background-color: blue;
color: white;
width: 100%;
height: 10vh;
flex-grow:0; //PARA MANTER ALTURA FIXA
`



class App extends React.Component {

  render() {



    return (
      <Pai>

        <Header>
          <LogoDiv>
            <Logo src={img} alt="Imagem do logo" />
          </LogoDiv>
        </Header>

        <StarLab />


        <Footer>
          EU SOU O FOOTER
        </Footer>
      </Pai>
    );
  }
}



export default App;