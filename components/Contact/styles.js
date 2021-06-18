import styled from 'styled-components';
import BgImg from '../../img/bg-rodape.png'

export const ContactContainerStyled = styled.div`
    background-image: url(${BgImg});
    min-height: 50vh;
    display: flex;

@media (max-width: 800px) {
    flex-direction: column;
    position: relative;
}
  `;

export const TextContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    font-family: 'Baloo Tamma 2', cursive;
    max-width: 60vw;
    color: white;

@media (max-width: 800px) {
    max-width: 100vw;
    width: 100%;
    text-align: center;
    padding: 20px;
}

h2 {
    margin-bottom: 20px;
}

div {
    display: flex;

@media (max-width: 800px) {
    width: 100%;
    text-align: center;
    flex-direction: column;
    position: relative;
 }
}

div h3{
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    margin-bottom: 50px;
    font-weight: bold;
    font-family: 'Nunito Sans', sans-serif;
    color:#00ff99;
    text-align: center;
}

div img {
    margin-top: 20px;
    width: 280px;
    height: 100px;
 
@media(max-width: 80px) {
    width: 80%;
 }
}
`;

export const FormContainerStyled = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 60px;
    width: 100%;
    max-width: 50vw;

@media (max-width: 800px) {
    max-width: 100vw;
    padding: 20px;
}
 
input {
    padding-left: 10px;
    width: 100%;
    border: 1px solid grey;
    background-color: white;
    font-family: "Baloo Tamma 2", cursive;
    margin-bottom: 20px;
}

textarea {
    border: 1px solid grey;
    width: 100%;
    height: 50%;
    background-color: white;
::placeholder{
  padding-left: 10px;
  font-family: "Baloo Tamma 2", cursive;
 }
}

button { 
    margin-bottom: 50px;
    padding: 5px 15px;
    border: 1px solid	grey;
    color: black;
    font-size: 15px;
    font-weight: bold;
    background-color: #e6e6e6;
}
`;

