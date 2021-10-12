import React from 'react';

import People from '../../assets/imgs/people.png'
 import { Container, TextContainer, ImageContainer, Image, BgImage } from './styles';
const Presentation = () => {
    return ( 
        <Container>
            <TextContainer>
                <article>
                    <h1>
                        Hello<span>.</span><br/>
                        I am<br/>
                        Jhon
                    </h1>
                    <p>
                        I am Graphic Designer and<br/> UI Designer.
                    </p>
                </article>
                <button>Say hello</button>
                <button>About me →</button>
            </TextContainer>
            <ImageContainer>
                <Image src={People} alt="image-people"></Image>
                <BgImage/>
            </ImageContainer>

        </Container>
     );
}
 
export default Presentation;