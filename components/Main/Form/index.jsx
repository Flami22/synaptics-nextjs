import React, { useState } from 'react';
import { MainFormStyled } from './styles';
import axios from 'axios';

export const MainForm = () => {

const [email, setEmail] = useState('');

function handleSignupToNewsletter(event){

event.preventDefault();
  
axios.post('/api/subscribe', { email });
 
}

  return(


    <MainFormStyled onSubmit={handleSignupToNewsletter} >

    <input name="email" type="text" value={email} placeholder="Digite seu Email" onChange={event => setEmail(event.target.value)} />

     <button type="submit">
           Cadastre-se
     </button>

  </MainFormStyled>


  )

}
export default MainForm;
