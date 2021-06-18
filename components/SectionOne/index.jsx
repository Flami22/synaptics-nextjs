import React from 'react';
import Image from 'next/image';
import { SectionOneStyled } from './styles';
import Img from '../../img/bg-footer.png';

export const SectionOne = () => {
    return (
        <SectionOneStyled>

            <article>

                <div>
                    <h1>
                        Aumente a produtividade em TI 
                        de sua empresa
                    </h1>
                    <br />
                    <h4>
                        A busca pela maior
                        produtividade é
                        constante em
                        empresas de todos os
                        setores. Afinal, com
                        o crescimento da
                        competitividade e a
                        necessidade de fazer
                        os recursos
                        corporativos
                        renderem cada vez
                        mais, as equipes
                        devem produzir mais
                        e melhor para se
                        destacar.
                    </h4>
                    <br />
                    <p>
                        Boa parte das
                        empresas possuem
                        equipe de TI, mesmo
                        aquelas que
                        terceirizam parte do
                        serviço ainda mantêm
                        pessoal dedicado a
                        tecnologia da
                        informação. E não
                        basta apenas
                        existir: uma equipe
                        de TI precisa ser
                        produtiva, os
                        funcionários devem
                        saber alinhar a
                        tecnologia
                        disponível no
                        mercado para agregar
                        valor ao negócio e,
                        acima de tudo, gerar
                        resultados
                        positivos. Confira a
                        seguir algumas
                        maneiras de aumentar
                        a produtividade da
                        equipe de TI da sua
                        empresa:
                    </p>

                </div>
                <span>
                    <Image src={Img} />
                    </span>
            </article>
        </SectionOneStyled>
    )
}
export default SectionOne;