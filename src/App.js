import React from 'react';
import styled from 'styled-components'
import StarLab from './Componentes/StarLab';

//CONTAINER PRINCIPAL
const Pai = styled.div`
display: flex; 
flex-direction: column; 
width: 100vw; 
height: 100vh; //(TEMPORARIO)MUDAR, porque depois HEIGHT DEPENDE DOS CARDS
background-color: grey; 
`;

//ESTILIZAÇÃO DE HEADER
const Header = styled.div`
display: flex; 
background-color: red;
width: 100%; 
height: 10vh; 
flex-grow: 0; //PARA MANTER ALTURA FIXA
`;



const Footer = styled.div`
display: flex; 
background-color:blue;
color: white; 
width: 100%; 
height: 10vh; 
flex-grow: 0; //PARA MANTER ALTURA FIXA
`;



class App extends React.Component {

  render() {



    return ( 
     <Pai>

       <Header>
      EU SOU O HEADER
       </Header>

       <StarLab/>
       

       <Footer>
      EU SOU O FOOTER
       </Footer>
     </Pai>
    );
  }
}



export default App;