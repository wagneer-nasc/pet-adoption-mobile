import React from 'react';
import { Image, ScrollView } from 'react-native';
import logo from '../../assets/logo.png';
import dog from '../../assets/dog.png';
import cat from '../../assets/cat.png';
import porquinhoDaIndia from '../../assets/porquinhoDaIndia.png';
import papagaio from '../../assets/papagaio.png';

import Icon from 'react-native-vector-icons/Feather';
import {
    NamePetList, TextRecomendation, ContainerButtonAddPet,
    ContainerRecomendation, ContainerLike,
    Container, Title, ContainerHeader, ContainerBody, ContainerImage, NamePet, ContainerSeeMore, SeeMoreText, FlatListPetRecomendation, ContainerListInfo, ImagePet, ContainerInfoPet, TextInfo, ButtonAddPet
} from './styles';
import { useNavigation } from '@react-navigation/native';

export interface Data {
    image: string;
    name: string,
    like: string,
    id: string,
}

const Details: React.FC = () => {
    const navigation = useNavigation();

    function handleNavigateToPetList(type: string) {
        navigation.navigate('PetList', { type });
    }

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
                    <ContainerImage onPress={() => { handleNavigateToPetList('Cachorro') }}>
                        <Image style={{ width: 130, height: 100 }} source={dog} />
                        <NamePet>Cachorros</NamePet>
                        <ContainerSeeMore>
                            <SeeMoreText>Ver mais</SeeMoreText>
                            <Icon name="chevron-right" size={20} color="#77393e" />
                        </ContainerSeeMore>
                    </ContainerImage>
                    <ContainerImage onPress={() => { handleNavigateToPetList('Gato') }}>
                        <Image style={{ width: 130, height: 100 }} source={cat} />
                        <NamePet>Gatos</NamePet>
                        <ContainerSeeMore>
                            <SeeMoreText>Ver mais</SeeMoreText>
                            <Icon name="chevron-right" size={20} color="#77393e" />
                        </ContainerSeeMore>
                    </ContainerImage>
                    <ContainerImage onPress={() => { handleNavigateToPetList('Roedores') }}>
                        <Image style={{ width: 130, height: 100 }} source={porquinhoDaIndia} />
                        <NamePet>Roedores</NamePet>
                        <ContainerSeeMore>
                            <SeeMoreText>Ver mais</SeeMoreText>
                            <Icon name="chevron-right" size={20} color="#77393e" />
                        </ContainerSeeMore>
                    </ContainerImage>
                    <ContainerImage onPress={() => { handleNavigateToPetList('Aves') }}>
                        <Image style={{ width: 130, height: 100 }} source={papagaio} />
                        <NamePet>Aves</NamePet>
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

            <ContainerButtonAddPet>
                <ButtonAddPet onPress={() => { navigation.navigate('AddPet') }}>
                    <Icon
                        name="plus-circle" size={45} color="#77393e" />
                </ButtonAddPet>
            </ContainerButtonAddPet>
        </Container>
    );
}

export default Details;