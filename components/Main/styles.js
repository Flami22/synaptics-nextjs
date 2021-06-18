import styled from 'styled-components';
import MainPng from '../../img/main.png';


export const Main = styled.main`

    display:flex;
    max-width: 100vw;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background: #14191b url(${MainPng}) top repeat-x;
    color: #fff;
    min-height: 60vh;  
    font-family: "Baloo Tamma 2", cursive;


h1 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 150px;
    font-family: "Baloo Tamma 2", cursive;
    font-weight: 300;
    font-size: 80px;
}

p {
    margin-top: 50px;
    font-size: 1.5rem;
    text-align: center;
}



`;