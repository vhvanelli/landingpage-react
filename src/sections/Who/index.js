import React from 'react';

import People from '../../assets/imgs/people.png'
import { Container, TextContainer, ImageContainer, Image, BgImage } from './styles';
const Who = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={People} alt="image-people"></Image>
                <BgImage />
            </ImageContainer>
            <TextContainer>
                <article>
                    <h2>
                        Who am I<span>?</span>
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.<br/>
                    </p>
                    <a>Find out more →</a>
                </article>
            </TextContainer>

        </Container>
    );
}

export default Who;