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

// Estilização do footer 

const Footer = styled.div`
display: flex;
flex-direction: row;
background-color: #272134;
color: white;
width: 100%;
height: 10vh;
flex-grow:0; //PARA MANTER ALTURA FIXA
justify-content: space-between;
 align-items: center;

 `
const CaixaTexto = styled.div`
background-color:#272134;
color:#bf870d;
height:100%;
text-align: center;
justify-content:center;
justify-self: flex-start;

`
const IconesFooter = styled.div`
background-color: blue;
height: 100%;
width: 25%;
text-align: center;
justify-content: center;

`
const TextoIconeFooter = styled.a`
background-color: brown;
 width:100%;
 height: 100%;
 justify-content:space-evenly;
 align-items: center;
 display: flex;
 flex-direction: row;

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
        <LogoDiv>
            <Logo src={img} alt="Imagem do logo" />
          </LogoDiv>
       
          <CaixaTexto>
          <p>Empresa StarLab CNPJ 00000000</p>
         
          <p>Desenvolvido por: Martin Sejas, Stella Castro e William Freitas</p>
          </CaixaTexto>

          <IconesFooter>
            <TextoIconeFooter> 
              <a href=''>
                rede sociais
              </a>
              <a href=''>
                rede sociais
              </a>
              <a href=''>
                rede sociais
              </a>
            </TextoIconeFooter>
          </IconesFooter>

          
        </Footer>
      </Pai>
    );
  }
}



export default App;