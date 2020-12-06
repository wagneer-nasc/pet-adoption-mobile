import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import api from '../../service/api';
import {
    ContainerImages, ImagePet,
    ButtonBack, ContainerNameLikes, Container, ContainerBody, NamePet, NickDescription, LabelAbout, TextAbout, ContainerInfPet, ContainerInfo, TextInfo, ButtonLike, ContainerButtonBackAdaption
} from './styles';

export interface Pet {
    id: string,
    name: string
    name_race: string
    specie: string
    about: string
    sex: string
    address: string
    age: string
    wieght: string
    contact: string
    images: Array<{
        id: string,
        path: string,
    }>

}


interface PetListRouteParams {
    id: string;
}
const Details: React.FC = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const [pet, setPet] = useState<Pet>();

    const params = route.params as PetListRouteParams;
    console.log(params.id)

    useEffect(() => {
        loadPetDetails();
    }, [params.id])

    async function loadPetDetails() {
        await api.get(`/pets/${params.id}/show`).then(response => {
            setPet(response.data);
        })
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
                            uri: pet?.images[0].path,
                        }} />

                    <ContainerBody>
                        <ContainerNameLikes>
                            <NamePet>{pet?.name_race}</NamePet>
                            <ButtonLike>
                                <Icon name="heart" size={30} color='#77393e' />
                                <TextAbout>20 likes</TextAbout>
                            </ButtonLike>
                        </ContainerNameLikes>

                        <NickDescription>{pet?.name}</NickDescription>

                        <ContainerImages>
                            <ImagePet source={{
                                uri: pet?.images[0].path,
                            }} />
                            <ImagePet source={{
                                uri: pet?.images[1].path,
                            }} />
                            <ImagePet source={{
                                uri: pet?.images[2].path,
                            }} />
                        </ContainerImages>

                        <LabelAbout>About</LabelAbout>
                        <TextAbout>{pet?.about}</TextAbout>

                        <ContainerInfPet>
                            <ContainerInfo>
                                <TextInfo>Idade</TextInfo>
                                <TextInfo>{pet?.age}</TextInfo>
                            </ContainerInfo>

                            <ContainerInfo>
                                <TextInfo>Peso</TextInfo>
                                <TextInfo>{pet?.wieght}</TextInfo>
                            </ContainerInfo>

                            <ContainerInfo>
                                <TextInfo>Sexo</TextInfo>
                                <TextInfo>{pet?.sex}</TextInfo>
                            </ContainerInfo>
                        </ContainerInfPet>
                    </ContainerBody>
                </Container>
            </ScrollView>

            <ContainerButtonBackAdaption>
                <ButtonBack onPress={() => { navigation.navigate('PetList') }}
                    style={{ padding: 10 }}>
                    <Icon name="corner-down-left" size={30} color='#77393e' />
                </ButtonBack>
                <Button>Adpation</Button>
            </ContainerButtonBackAdaption>
        </>
    );
}

export default Details;