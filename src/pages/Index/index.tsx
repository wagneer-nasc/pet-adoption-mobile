import React from 'react';
import { Text, View } from 'react-native';
import { Container, Image, ContainerImage } from './styles';

import dogImg from '../../assets/dog.jpg';
const Index: React.FC = () => {






    return (

        <Container>
            <ContainerImage>
                <Image source={dogImg} />
            </ContainerImage>


        </Container>

    );
}

export default Index;