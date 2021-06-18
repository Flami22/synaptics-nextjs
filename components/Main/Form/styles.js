import styled from 'styled-components';

export const MainFormStyled = styled.form`

    height: 90px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 100px;
    transition: all 0.6s ease-out;
    transform: rotateX(0deg) rotateY(0deg);
    perspective: 1000px;
    transform-style: preserve-3d;


:hover {
    transition: all 0.6s linear;
    transform: scale(1.1);
}

 input {
    height: 44px;
    letter-spacing: 2px; 
    font-size: 1.5rem;   
    background: transparent;
    border:  1px solid #38edda;
    background: transparent;
    color: #38edda; 
    width: 60vw;

@media (max-width:380px){
    max-width: 50vw
  }
}

 input::-webkit-input-placeholder {
    font-size: 1rem;
    padding-left: 10px;
    font-family: "Baloo Tamma 2", cursive;
    color: #38edda ;
    display: flex;
    align-items: center;
}

button {
    padding:7px 10px;
    letter-spacing: 1px;
    border: 1px solid;
    font-size: 1rem;
    overflow: hidden;
    transition: 1.5s;
    background-color: transparent;
    color: #38edda;
    font-family: "Baloo Tamma 2", cursive;
}

`;