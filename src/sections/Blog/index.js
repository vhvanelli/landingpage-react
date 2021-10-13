import React from 'react';

import AvocadoImg from '../../assets/imgs/portifolio/avocado.jpg'
import CherryImg from '../../assets/imgs/portifolio/cherry.jpg'
import OrangesImg from '../../assets/imgs/portifolio/oranges.jpg'

import PortifolioImg from '../../components/PortifolioImg'

import { Container, Title, Text, Button, ImgsContainer } from './styles';
const Portifolio = () => {
    return (
        <Container>
            <Title>Blog<span>.</span></Title>
                <Text>Look at all my lastest works.</Text>
                <ImgsContainer>
                    <PortifolioImg src={AvocadoImg} />
                    <PortifolioImg src={CherryImg} />
                    <PortifolioImg src={OrangesImg} />
                </ImgsContainer>
                    <Button>Read all articles →</Button>
        </Container>
    );
}

export default Portifolio;