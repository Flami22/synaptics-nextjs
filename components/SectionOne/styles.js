import styled from 'styled-components';


export const SectionOneStyled = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

article {
    display: flex;
    

@media (max-width: 780px) {
    flex-direction: column-reverse;
    position: relative;
    
  }
}

article div {
    max-width: 40vw;
    text-align: left;
    margin-top: 55px;

@media (max-width: 780px) {

    max-width: 80%;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    text-align: center;
  }
}

span {
    max-width: 300px;

@media (max-width: 780px) {
    margin: 0 auto;
    width: 300px;
    height: 250px;
}

@media (min-width: 1980px) {
  span {
    width: 1000px;
  }
}

}
span img {
    margin-left: 70px;
  
@media (max-width: 780px) {
    margin-left: 30px;
    margin-bottom: 50px;
    width: 300px;
    height: 250px;
}

@media (min-width: 1980px) {
    margin-left: 200px;
    margin-bottom: 100px;
    width: 500px;
 }
}
`;