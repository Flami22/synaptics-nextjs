import styled from 'styled-components';


export const SectionTwoStyled = styled.section`
    max-width: 100vw;
    margin-top: 150px;
    margin-left:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
@media (max-width: 580px) {
    flex-direction: column;
    position: relative;
    text-align: center;
  }

div {
    width: 40%;
    margin-right:50px;

@media (max-width: 580px) {
    width: 100%;
    margin-right:50px;
    flex-direction: column;
    position: relative;
    align-items: center;
    text-align: center;
  }
}

div img {
    width: 40vw;

@media (max-width: 580px) {
    width: 80vw;
    margin-bottom: 30px;
 
  }
}
`;
