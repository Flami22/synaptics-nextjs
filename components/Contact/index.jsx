import React from 'react';
import Image from 'next/image';
import Img1 from '../../img/g_play.png';
import Img2 from '../../img/app_store.png';
import { ContactContainerStyled, TextContainerStyled, FormContainerStyled } from './styles';

export const Contact = () => {
    return (
        <ContactContainerStyled>
            <TextContainerStyled>

                <h2>CONTATO</h2>

                <div>
                    <br />
                    <h3>
                     _Quer saber como destacar seu negócio na
                     era da experiência?<br />
                     @Preencha os dados abaixo que um
                     especialista te orientará.
                    </h3>


                </div>
                <p>
                    Soluções
                    em
                    sistemas
                    WEB
                </p>
                <p>
                    <span></span>
                     São Paulo,BR
                </p>
                <p>
                    <span></span>
                     +55 11
               910420468
               </p>
                <p>
                    <span></span>
                synapticssistemas@outlook.com
               </p>

                <div>

                    <a href="#">
                        <Image className="store" src={Img1} alt="Button google play" />
                    </a>

                    <a href="#">
                        <Image className="store" src={Img2} alt="Button app store" />
                    </a>

                </div>

            </TextContainerStyled>

            <FormContainerStyled>
                <input id="name" name="name" placeholder="Nome" type="text" required />


                <input id="email" name="email" placeholder="Email" type="email" required />


                <textarea id="comments" name="comments" placeholder="Digite aqui"
                    rows="5"></textarea><br />


                <button className="btn-form" type="submit">
                    Enviar
            </button>
            </FormContainerStyled>


        </ContactContainerStyled>

    );
}

export default Contact;