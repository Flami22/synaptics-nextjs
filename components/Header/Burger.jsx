import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurguer = styled.div`

    width: 2rem;
    height: 2rem;
    top: 15px;
    z-index: 20;
    display: none; 


    @media (max-width: 620px){
      display: flex; 
      justify-content: space-around;
      flex-flow: column; 
      margin-left: 280px;
    }
@media (max-width: 380px){
  
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;  
}

 div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#f1f1f1' : ' #bfbfbf'};
    transform-origin: 1px;
    transition: all 0.3s linear;


 &:nth-child(1){
   transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
 }
 
 &:nth-child(2){
   transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
   opacity: ${({ open }) => open ? 0 : 1};
 }

 &:nth-child(3){
   transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
   }
 }
`;

export const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)} >
        <div />
        <div />
        <div />
      </StyledBurguer>
      <RightNav open={open} />
    </>

  );
}
export default Burger