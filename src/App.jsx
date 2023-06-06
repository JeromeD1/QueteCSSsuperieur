import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';


const myCard = {
  image:"https://www.indiewire.com/wp-content/uploads/2020/06/ChickenRun_01.jpg",
  name:"Poupoule",
  job:"Eleveuse d'oeufs en série",
  email:"📧 poupoule@poulailler.run",
  tel:"☎️ 06.06.07.07.08",
  background:"https://4.bp.blogspot.com/-1O_XSrsGmcw/UNGCg7YuCmI/AAAAAAAAAWg/BEadIIN-8a8/s1600/Chicken+Run+%25284%2529.jpg"
}

const CardContainer = styled.div`
display: flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
border:1px solid gray;
width: 500px;
height: 250px;
background-image: url(${myCard.background});
background-size:cover;
`;

const ContainerFlexRow = styled.div`
display: flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
border:1px solid gray;
width: auto;
height: 125px;
`

const ContainerFlexColum = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;

width: auto;
min-width:375px;
height: 125px;
gap:10px;
backdrop-filter:blur(5px);
`;

const ContainerFlexColum2 = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-top:2px solid gray;
width: 500px;
min-width:375px;
height: 125px;
gap:10px;
backdrop-filter:blur(5px);
`;

const CardImg = styled.img`
width: 125px;
height: 125px;
`;

const Titre = styled.h1`
  text-align:center;
  font-size:2rem;
  margin:0;
  color: white;
  
`;

const ParagrapheItalyc= styled.p`
font-size:1.4rem;
font-style: italic;
margin:0;
color: white;
font-weight:500;
`

const ParagrapheNormal= styled.p`
font-size:1.4rem;
margin:0;
color: white;
font-weight:500;
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CardContainer>
        <ContainerFlexRow>
          <CardImg src={myCard.image} />
          <ContainerFlexColum>
            <Titre>{myCard.name}</Titre>
            <ParagrapheItalyc>{myCard.job} </ParagrapheItalyc>
          </ContainerFlexColum>
        </ContainerFlexRow>
        <ContainerFlexColum2>
          <ParagrapheNormal>{myCard.email} </ParagrapheNormal>
          <ParagrapheNormal>{myCard.tel} </ParagrapheNormal>
        </ContainerFlexColum2>

     </CardContainer>
    </>
  )
}

export default App
