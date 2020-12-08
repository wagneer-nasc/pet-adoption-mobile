import React, { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import logo from '../../assets/logo.png';
import dog from '../../assets/dog.png';
import cat from '../../assets/cat.png';
import porquinhoDaIndia from '../../assets/porquinhoDaIndia.png';
import papagaio from '../../assets/papagaio.png';
import IconSexy from 'react-native-vector-icons/SimpleLineIcons';

import Icon from 'react-native-vector-icons/Feather';
import {
    NamePetList, TextRecomendation, ContainerButtonAddPet, ContainerIconSex,
    ContainerRecomendation, ContainerViews,
    Container, Title, ContainerHeader, ContainerBody, ContainerImage, NamePet, ContainerSeeMore, SeeMoreText, FlatListPetRecomendation, ContainerListInfo, ImagePet, ContainerInfoPet, TextInfo, ButtonAddPet
} from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../service/api';


export interface Pet {
    id: string,
    name: string,
    name_race: string,
    specie: string,
    about: string,
    sex: string,
    address: string,
    age: string,
    wieght: string,
    contact: string,
    view: number,
    images: Array<{
        id: string,
        path: string,
    }>

}

const Details: React.FC = () => {
    const navigation = useNavigation();
    const [pets, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        loadPetsRecomendation();

    }, []);

    async function loadPetsRecomendation() {
        await api.get(`/pets/show/recomedation`).then(response => {
            setPets(response.data);
        })
    }

    function handleNavigateToPetList(type: string) {
        navigation.navigate('PetList', { type });
    }
    function handleNavigateToDetailsPet(id: string, type: string) {
        navigation.navigate('Details', { id, type });
    }


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
                    data={pets}
                    keyExtractor={(pet: Pet) => pet.id}
                    renderItem={({ item }: { item: Pet }) => (
                        <>
                            <ContainerListInfo onPress={() => { handleNavigateToDetailsPet(item.id, item.specie) }}>
                                <ImagePet source={{ uri: item.images[0].path }} />

                                <ContainerInfoPet>
                                    <NamePetList>{item.name_race}</NamePetList>
                                    <ContainerIconSex>
                                        {
                                            item.sex === 'Fêmea' ?
                                                <IconSexy name="symbol-female" size={20} color="#77393e" style={{ paddingRight: 8 }} /> :
                                                <IconSexy name="symbol-male" size={20} color="#77393e" style={{ paddingRight: 8 }} />
                                        }
                                        <TextInfo>{item.sex}</TextInfo>
                                    </ContainerIconSex>
                                    <ContainerViews>
                                        <TextInfo>{item.view}</TextInfo>
                                        <TextInfo>Views</TextInfo>
                                    </ContainerViews>

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