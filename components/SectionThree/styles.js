import styled from 'styled-components';

export const SectionThreeStyled = styled.section`
    max-width: 100vw;
    margin-top: 100px;
    margin-bottom: 50px;
    padding:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f7f7f7;

   

div {
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction: column;
    text-align: center;
}

div img {
    margin-bottom: 50px;
    width: 40vw;
}
`;

export const CardStyled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 80%;
    @media (max-width: 1025px) {
     width: 100%;
  }

@media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }

div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border:1px solid #e6e6e6;
    margin:100px 50px 100px 50px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 250px;
    height: 350px;
    transition: all 0.6s ease-out;
    transform: rotateX(0deg) rotateY(0deg);
    perspective: 1000px;
    transform-style: preserve-3d;
}

div:hover {
    transition: all 0.3s linear;
    transform: scale(1.1);
}

div::before {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 5%;
    width: 90%;
    height: 20px;
    background: rgba(0,0,0, 0.3);
    border-radius: 50%;
    z-index: -1;
    filter: blur(10px);
}

div p {
    text-align: center;
}

div img {
    margin-bottom: 15px;
    height: 150px;
    width:180px;
}
`;
