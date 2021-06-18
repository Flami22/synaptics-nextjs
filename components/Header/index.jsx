import React from 'react';
import Image from 'next/image';
import { NavMenu } from './styles';
import LogoImg from '../../img/logo_2.png';
import Burger from './Burger';






export const Navbar = () => {
    return (

        <NavMenu>
            <a href="#myPage"><Image src={LogoImg} /></a>
            <Burger />

        </NavMenu>



    );
}
export default Navbar;
