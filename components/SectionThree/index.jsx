import React from 'react';
import Image from 'next/image';
import { SectionThreeStyled, CardStyled } from './styles';
import Adobe from '../../img/adobe.png';
import ImgBoot from '../../img/bootstrap.png';
import ImgReact from '../../img/gif.gif';
import ImgNode from '../../img/node.png';



export const SectionThree = () => {
    return (
        <SectionThreeStyled>


            <div>

                <Image src={Adobe} />
                <h2>Tecnologia de ponta para suas aplicações</h2>
                <br />
                <h4>
                    Os layouts dos sites são criados para se
                    adequarem aos diversos tamanhos de
                    telas, sejam desktops, tablets ou
                    smartphones.
                </h4>
            </div>


            <CardStyled>




                <div >
                    <Image src={ImgBoot} alt="Bootstrap 4" />

                    <h3>
                        <strong>Bootstrap4</strong>
                    </h3>
                    <p>
                        Crie
                        projetos
                        rápidos e
                        responsivos
                        para
                        dispositivos
                        móveis na
                        Web com a
                        biblioteca
                        de
                        componentes
                        front-end
                        mais
                        popular do
                        mundo.
</p>
                </div>

                <div>

                    <Image src={ImgReact} alt="React framework" />

                    <h3>
                        <strong>ReactJS</strong>
                    </h3>
                    <p>
                        Uma
                        biblioteca
                        JavaScript
                        para criar
                        interfaces
                        de usuário
                        faz com
                        que a
                        criação de
                        UIs
                        interativas
                        seja uma
                        tarefa
                        rapida e
                        fácil.
</p>
                </div>


                <div>

                    <Image src={ImgNode} alt="NodeJS" />

                    <h3>
                        <strong>NodeJS</strong>
                    </h3>
                    <p>
                        Criação de
                        aplicativos
                        de rede
                        escaláveis
                        e
                        rápidos,
                        capaz de
                        lidar com
                        um grande
                        número de
                        conexões
                        simultâneas
                        com alto
                        rendimento.
</p>
                </div>


            </CardStyled>




        </SectionThreeStyled >
    )
}
export default SectionThree;


