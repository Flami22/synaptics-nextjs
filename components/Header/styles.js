import styled from 'styled-components';

export const NavMenu = styled.header`
     width:  100%;
     height: 60px;
     background-color: #222222;
     display: flex;
     justify-content: space-around;
     align-items: center;
     border-bottom: 2px solid yellow;
     z-index: 50;
     transition: all 0.3s linear;

@media (max-width:580px){

    justify-content: space-around;
    z-index: 0;

div {

    margin-left: 50px;

@media (max-width:325px){
       
    margin-right: 35px;
       
  }
 }
}

a img{

    margin: 5px 0px;
    height: 50px;
    margin-left: 10px;
}

nav{

    height: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

`;