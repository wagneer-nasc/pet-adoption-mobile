import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Dimensions, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {
    ContainerImages, ImagePet,
    ButtonBack, ContainerNameLikes, Container, ContainerBody, NamePet, NickDescription, LabelAbout, TextAbout, ContainerInfPet, ContainerInfo, TextInfo, ButtonLike, ContainerButtonBackAdaption
} from './styles';

export interface Data {
    image: string;
    name: string,
    adress: string,
    age: string,
    sex: string,
    weight: string,
    about: string,
}


const Details: React.FC = () => {
    const navigation = useNavigation();
    const data: Data = {
        image: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
        name: 'Lebrador Retriever',
        adress: 'Brasil, Recife-PE',
        age: '8 month',
        sex: 'Female',
        weight: '8,4 kg',
        about: 'A adoção de animais de estimação é o processo de assumir a responsabilidade por um animal de estimação que um proprietário anterior abandonou ou liberou para uma organização de abrigo ou resgate. Fontes comuns para animais de estimação adotáveis ​​são abrigos de animais e grupos de resgate.'
    }

    return (
        <>
            <ScrollView
                style={{ flex: 1, backgroundColor: '#fff3f4' }}>
                <Container>
                    <Image style={{
                        width: Dimensions.get('window').width,
                        height: 380
                    }}
                        source={{
                            uri: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
                        }} />

                    <ContainerBody>
                        <ContainerNameLikes>
                            <NamePet>Cassy</NamePet>
                            <ButtonLike>
                                <Icon name="heart" size={30} color='#77393e' />
                                <TextAbout>20 likes</TextAbout>
                            </ButtonLike>
                        </ContainerNameLikes>

                        <NickDescription>Apple Head Cihuahua</NickDescription>

                        <ContainerImages>
                            <ImagePet source={{
                                uri: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
                            }} />
                            <ImagePet source={{
                                uri: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
                            }} />
                            <ImagePet source={{
                                uri: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
                            }} />
                        </ContainerImages>

                        <LabelAbout>About</LabelAbout>
                        <TextAbout>{data.about}</TextAbout>

                        <ContainerInfPet>
                            <ContainerInfo>
                                <TextInfo>Age</TextInfo>
                                <TextInfo>9 month</TextInfo>
                            </ContainerInfo>

                            <ContainerInfo>
                                <TextInfo>Weight</TextInfo>
                                <TextInfo>8,6 kg</TextInfo>
                            </ContainerInfo>

                            <ContainerInfo>
                                <TextInfo>Sex</TextInfo>
                                <TextInfo>Female</TextInfo>
                            </ContainerInfo>
                        </ContainerInfPet>
                    </ContainerBody>
                </Container>
            </ScrollView>

            <ContainerButtonBackAdaption>
                <ButtonBack onPress={() => {navigation.navigate('PetList')}}
                 style={{ padding: 10 }}>
                    <Icon name="corner-down-left" size={30} color='#77393e' />
                </ButtonBack>
                <Button>Adpation</Button>
            </ContainerButtonBackAdaption>
        </>
    );
}

export default Details;