import styled from 'styled-components';


export const SectionFourStyled = styled.section`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #222222;



article {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 100px;
color: #38edda;
}
article img{
    margin-top: 80px;
max-width: 90%;

}
h3{
    margin-top: 50px;
    font-weight: 400;
}
div h2{
    margin-top: 20px;
  font-weight:400;
}
`;

export const Svg = styled.div`
width: 100%;
margin-bottom: -6px

`;

export const Card2Styled = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
background-color: #222222;
color: #38edda;
border: none;
padding: 50px 5px;
@media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }

div{

    display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
    border:1px solid #38edda;
    margin:20px;
    padding: 30px 40px;
    border-radius: 10px;
    width: 250px;
    height: 450px;
    text-align: center;
    transition: all 0.6s ease-out;
transform: rotateX(0deg) rotateY(0deg);
perspective: 1000px;
transform-style: preserve-3d;
box-shadow: -30px 30px 20px rgba(0,0,0,0.3);

 
}
div:hover{
    box-shadow: 0 5px 10px 0 #15f4ee inset, 0 5px 10px 0 #15f4ee;
    border:2px solid #38edda;
    transition: all 0.3s linear;
    transform: scale(1.1);

}
div h2{
    font-weight: 600;
    margin: 20px 10px;
    font-family: 'Baloo Tamma 2', cursive;
}
div p{
    font-family: 'Baloo Tamma 2', cursive;
    text-align: center;
    margin: 5px;
}
div button {
    margin-top: 20px;
    padding: 8px 50px;
    border: 1px solid #38edda;
    color: #38edda;
    border-radius: 6px;
}
`;
