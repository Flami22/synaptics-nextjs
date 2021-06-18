import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding:0;
      box-sizing: border-box;

  }
  html, body, #root {
      max-height: 100vh;
      max-width: 100vw;
      width: 100%;
      height: 100%;
      font-family: 'Baloo Tamma 2', cursive;
      overflow-x: hidden;
   
    
  
  }
  *, button, input {
border:0;
background: none;

}
a{
  text-decoration: none;
  
}
li{
  list-style:none;
}

h1{
  font-size: 3rem;
  @media (max-width: 580px){
    font-size: 2.5rem !important;
  }
}
h2{
  font-size: 2.5rem;

  font-weight: 500;
}
h3{
  font-size: 1.5rem;
  font-weight: bold;
}

strong{
  font-weight: bold;
}
`;
