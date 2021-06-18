import React from 'react';
import Image from 'next/image'
import { SectionTwoStyled } from './styles';
import Img from '../../img/bg-secundary.png';

export const SectionTwo = () => {
    return (
        <SectionTwoStyled>


            <div>
                <Image className="bg-secundary" src={Img} />
            </div>
            <div>
                <h2>Missão e valores</h2>
                <br />
                <p>
                    <strong>MISSÃO: </strong>
                    Diante do desafio de
                    planejar em
                    ambientes cada vez
                    mais complexos e
                    competitivos,
                    fornecer as melhores
                    soluções para
                    projetos
                </p>
                <br />
                <p>
                    <strong>VISÃO: </strong>
                    Tornar-se referência
                    de atuação para o
                    ambiente
                    corporativo, através
                    da excelência em
                    soluções de TI,
                    contribuindo com os
                    resultados dos
                    clientes,
                    assegurando a
                    sustentabilidade do
                    negócio com
                    inovação,
                    responsabilidade
                    social e ambiental e
                    o bem-estar das
                    pessoas.
                </p>

            </div>


        </SectionTwoStyled>
    )
}
export default SectionTwo;