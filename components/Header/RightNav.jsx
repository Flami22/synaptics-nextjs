import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
right: 0;
@media (max-width: 580px) {
display: none;
}

ul{
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 100%;
    flex-flow: row nowrap;
@media (max-width: 620px){
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    flex-flow: column nowrap;
    background-color:#222222;
    position: fixed;
    padding-top: 60px;
    top: 0;
    right: 0;
    height: 70%;
    width:280px;
    z-index: 10;
    transition: transform 0.3s ease-in-out;
}
}

ul li{
    align-items:center;
    height: 100%;
    width: 100%;
}

ul li a{ 
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100%;
    padding: 0px 15px;

&:hover{
      color: yellow;
      background-color: gray;

}}

`;


export const RightNav = ({ open }) => {
    return (
        <Nav open={open} >
            <ul>
                <li>
                    <a href="#about">HOME</a>
                </li>
                <li>
                    <a href="#portfolio">TECNOLOGIAS</a>
                </li>
                <li>
                    <a href="#pricing">SERVIÇOS</a>
                </li>
                <li>
                    <a href="#contact">CONTATO</a>
                </li>
            </ul>

        </Nav>



    );
}
export default RightNav