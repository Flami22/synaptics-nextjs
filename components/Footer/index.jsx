import React from 'react';
import Image from 'next/image'
import { FooterStyled, PStyled } from './styles';
import ImgLink from '../../img/lk.png';
import ImgGit from '../../img//git.png';
import ImgTwe from '../../img/twitter.png';
import ImgWifi from '../../img/wifi.png';
import ImgLogo from '../../img/logo.png';


export const Footer = () => {
    return (
<> 
<FooterStyled>   
           <div>
                <a href="#myPage" title="Voltar a pagina inicial">
                    <Image className="imgFooter" src={ImgLogo} />
                </a>
            </div>


            <ul>
                <li>
                    <a>
                        <image className="img-footer" src={ImgWifi} />
                    </a>
                </li>
                <li>
                    <a>
                        <Image className="img-footer" src={ImgTwe} />
                        </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/joão-henrique-pereira-rodrigues-44b18a15b">
                        <Image className="img-footer" src={ImgLink} />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/Flami22/Synaptics.app">
                        <Image className="img-footer" src={ImgGit} />
                    </a>
                </li>
            </ul>

        </FooterStyled>
        <PStyled>
             <p>
                 &copy; Synaptics Sistemas 2021
            </p>
        </PStyled>
      
</>
        


    );
}
export default Footer;