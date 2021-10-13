import React from 'react';

import { Container, Title, Text, TextContainer, ButtonsContainer, Button } from './styles';
const Portifolio = () => {
    return (
        <Container>
            <Title>Portifolio<span>.</span></Title>
            <TextContainer> 
                <Text>Look at all my lastest works.</Text>
                <ButtonsContainer>
                    <Button>All category</Button>
                    <Button>Web design</Button>
                    <Button>3D</Button>
                    <Button>Branding</Button>
                    <Button>Mobile</Button>
                    <Button>Typography</Button>
                </ButtonsContainer>
            </TextContainer>
        </Container>
    );
}

export default Portifolio;