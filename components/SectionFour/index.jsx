import React from 'react';
import Image from 'next/image';
import { SectionFourStyled, Svg, Card2Styled } from './styles';
import ImgSite from '../../img/slider-2.png';


export const SectionFour = () => {
    return (

        <>
            <Svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#222222" fill-opacity="1"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
            </Svg>



            <SectionFourStyled>
                <article>
                    <div>
                        <h2>
                            Seu empreendimento já possui uma página
                            na internet ?
                </h2>
                        <h3>Conheça nossos planos</h3>

                    </div>
                    <div>
                        <Image src={ImgSite} className="site" />
                    </div>

                </article>
                <Card2Styled>


                    <div >

                        <h2>
                            Basic
    </h2>


                        <p>
                            <strong>- </strong>
        HTML + CSS
    </p>
                        <p>
                            <strong>- </strong>
        Domínio
        +
        Hospedagem
    </p>
                        <p>
                            <strong>- </strong>
        Suporte
    </p>
                        <p>
                            <strong>- </strong>
        Responsivo
    </p>
                        <p>
                            <strong>- </strong>
        SEO
        +
        Search
        Engine
    </p>
                        <p>
                            <strong>Capacidade: </strong>
        Baixa
    </p>


                        <h4>
                            Apartir
                            de:
    </h4>
                        <h3>
                            R$ 300
    </h3>
                        <button >
                            Conheça
    </button>

                    </div>


                    <div >

                        <h2>
                            Pro
    </h2>


                        <p>
                            <strong>- </strong>
        Javascript
    </p>
                        <p>
                            <strong>-</strong>
        Bootstrap
        4
    </p>
                        <p>
                            <strong>- </strong>
        Banco de dados
    </p>
                        <p>
                            <strong>- </strong>
        API
        simples
    </p>
                        <p>
                            <strong>- </strong>
        Node.JS

    </p>
                        <p>
                            <strong>Capacidade: </strong>
        Média
    </p>


                        <h4>
                            Apartir
                            de:
    </h4>
                        <h3>
                            R$ 1.300
    </h3>

                        <button>
                            Conheça
    </button>


                    </div>


                    <div>

                        <h2>
                            Premium
    </h2>


                        <p>
                            <strong>- </strong>
        Alta
        carga
        de
        trabalho
    </p>
                        <p>
                            <strong>- </strong>
        API + Banco de dados
    </p>
                        <p>
                            <strong>- </strong>
        React
        JS
    </p>
                        <p>
                            <strong>- </strong>
        APP
        Android
        +
        IOS
    </p>
                        <p>
                            <strong>- </strong>
        Suporte 24Horas
    </p>
                        <p>
                            <strong>Capacidade: </strong>
        Alta
    </p>


                        <h4>
                            Apartir
                            de:
    </h4>
                        <h3>
                            R$ 3.200
    </h3>
                        <button >
                            Conheça
    </button>

                    </div>


                </Card2Styled>

            </SectionFourStyled>
        </>

    )
}
export default SectionFour;