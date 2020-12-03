import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import logo from '../../assets/logo.png';
import dog from '../../assets/dog.png';
import cat from '../../assets/cat.png';
import porquinhoDaIndia from '../../assets/porquinhoDaIndia.png';
import papagaio from '../../assets/papagaio.png';
import IconSexy from 'react-native-vector-icons/SimpleLineIcons';

import Icon from 'react-native-vector-icons/Feather';
import {
    NamePetList, TextRecomendation,
    ContainerRecomendation, ContainerLike,
    Container, Title, ContainerHeader, ContainerBody, ContainerImage, NamePet, ContainerSeeMore, SeeMoreText, FlatListPetRecomendation, ContainerListInfo, ImagePet, ContainerInfoPet, TextInfo
} from './styles';

export interface Data {
    image: string;
    name: string,
    like: string,
    id: string,
}

const Details: React.FC = () => {

    const data: Data[] = [
        {
            id: '01',
            image: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
            name: 'Lebrador Retriever',
            like: '50',
        }, {
            id: '02',
            image: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
            name: 'Shetland',
            like: '70',
        }
    ]
    return (
        <Container>
            <ContainerHeader>
                <Image style={{ height: 180, width: 140 }} source={logo} />
                <Title>
                    Olá, Seja bem vindo,{"\n"}
                    e escolha o seu Pet!
                </Title>
            </ContainerHeader>
            <ContainerBody>
                <ScrollView horizontal>
                    <ContainerImage>
                        <Image style={{ width: 130, height: 100 }} source={dog} />
                        <NamePet>Cachorro</NamePet>
                        <ContainerSeeMore>
                            <SeeMoreText>Ver mais</SeeMoreText>
                            <Icon name="chevron-right" size={20} color="#77393e" />
                        </ContainerSeeMore>
                    </ContainerImage>
                    <ContainerImage>
                        <Image style={{ width: 130, height: 100 }} source={cat} />
                        <NamePet>Gato</NamePet>
                        <ContainerSeeMore>
                            <SeeMoreText>Ver mais</SeeMoreText>
                            <Icon name="chevron-right" size={20} color="#77393e" />
                        </ContainerSeeMore>
                    </ContainerImage>
                    <ContainerImage>
                        <Image style={{ width: 130, height: 100 }} source={porquinhoDaIndia} />
                        <NamePet>Porquinho da índia</NamePet>
                        <ContainerSeeMore>
                            <SeeMoreText>Ver mais</SeeMoreText>
                            <Icon name="chevron-right" size={20} color="#77393e" />
                        </ContainerSeeMore>
                    </ContainerImage>
                    <ContainerImage>
                        <Image style={{ width: 130, height: 100 }} source={papagaio} />
                        <NamePet>Papagaio</NamePet>
                        <ContainerSeeMore>
                            <SeeMoreText>Ver mais</SeeMoreText>
                            <Icon name="chevron-right" size={20} color="#77393e" />
                        </ContainerSeeMore>
                    </ContainerImage>
                </ScrollView>
            </ContainerBody>
            <ContainerRecomendation>
                <TextRecomendation>Recomendações</TextRecomendation>

                <FlatListPetRecomendation
                    data={data}
                    keyExtractor={(pet: Data) => pet.id}
                    renderItem={({ item }: { item: Data }) => (
                        <>
                            <ContainerListInfo>
                                <ImagePet source={{ uri: item.image }} />

                                <ContainerInfoPet>
                                    <NamePetList>{item.name}</NamePetList>
                                    <ContainerLike>
                                        <TextInfo>{item.like}</TextInfo>
                                        <TextInfo>Likes</TextInfo>
                                    </ContainerLike>

                                </ContainerInfoPet>
                            </ContainerListInfo>
                        </>
                    )}

                />
            </ContainerRecomendation>
        </Container>
    );
}

export default Details;