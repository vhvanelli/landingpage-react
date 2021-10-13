import React from 'react';

import People from '../../assets/imgs/people.png'

import { Footer as ContainerFooter, Title, Text, Img, Button } from './styles';
const Footer = () => {
    return ( 
        <ContainerFooter>
            <Title>Let's Work Together<span>.</span></Title>
            <Img src={People}/>
            <Text>If you have a website or mobile app idea in mind or you need some advice about<br/>
            product design, feel free to contact me. Currently my time books quickly, so the sooner<br/>
            you write, the better it is for both of us.
            </Text>
            <Button>johndoe@gmail.com</Button>
        </ContainerFooter>
     );
}
 
export default Footer;