import React from 'react';

import AvocadoImg from '../../assets/imgs/portifolio/avocado.jpg'
import ChairImg from '../../assets/imgs/portifolio/chair.jpg'
import CherryImg from '../../assets/imgs/portifolio/cherry.jpg'
import HeadphoneImg from '../../assets/imgs/portifolio/headphone.jpg'
import LampImg from '../../assets/imgs/portifolio/lamp.jpg'
import OrangesImg from '../../assets/imgs/portifolio/oranges.jpg'

import PortifolioImg from '../../components/PortifolioImg'

import { Container, Title, Text, TextContainer, ButtonsContainer, Button, ImgsContainer, ButtonAllWorks } from './styles';
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
                <ImgsContainer>
                    <PortifolioImg src={HeadphoneImg} />
                    <PortifolioImg src={AvocadoImg} />
                    <PortifolioImg src={LampImg} />
                    <PortifolioImg src={CherryImg} />
                    <PortifolioImg src={ChairImg} />
                    <PortifolioImg src={OrangesImg} />
                </ImgsContainer>
                    <ButtonAllWorks>Discover all works →</ButtonAllWorks>
        </Container>
    );
}

export default Portifolio;