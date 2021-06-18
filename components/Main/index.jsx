import React from 'react';
import { Main } from './styles';
import MainForm from './Form';

export const MainContent = () => {



    return (
        <>
            <Main>

                <h1>
                    Nós podemos ajudar sua empresa a
                    CRESCER!
                </h1>
                <p>
                    Soluções inteligentes em sistemas WEB
                </p>


                <MainForm />
                  


            </Main>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="1c1f22" fill-opacity="0.9" d="M0,160L60,144C120,128,240,96,360,74.7C480,53,600,43,720,53.3C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
             </>
    );
}
export default MainContent;