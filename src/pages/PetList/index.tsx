import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconSexy from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    ContainerButtonAddPet, ButtonAddPet, ContainerSexAll, SexAll, TextSex,
    Container, ContainerHeader, TitleHeader, TextInfo, ContainerIconSex,
    ContainerAgeWeight, ContainerIconAddress, ButtonBack, ContainerSobHeader, FlatListPet,
    ContainerListInfo, NamePet, ImagePet, ContainerInfoPet, ContainerInfAgeWeight
} from './styles';

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

interface PetListRouteParams {
    type: string;
}

const PetList: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [pets, setPets] = useState<Pet[]>([]);
    const [isClick, setIsClick] = useState<string>('');
    const params = route.params as PetListRouteParams;

    useEffect(() => {
        loadPets();

    }, [params.type])

    async function loadPets() {
        setIsClick('ALL');
        await api.get(`/pets/${params.type}`).then(response => {
            setPets(response.data);
        })
    }

    function handleNavigateToDetailsPet(id: string) {
        navigation.navigate('Details', { id });
    }

    async function handleListFilter(filter: string) {
        setIsClick(filter);
        await api.get(`/pets/${params.type}/${filter}/show`).then(response => {
            setPets(response.data);
        })

    }

    return (

        <Container>
            <ContainerHeader>
                <ButtonBack onPress={() => { navigation.navigate('Index') }}>
                    <Icon name="arrow-left" size={35} color="#77393e" />
                </ButtonBack>
                <TitleHeader>{params.type}</TitleHeader>
            </ContainerHeader>
            <ContainerSobHeader>
                <ContainerSexAll>
                    <SexAll
                        style={{ backgroundColor: isClick == 'ALL' ? '#e0b0b4' : '#FFF' }}
                        onPress={() => { loadPets() }}>
                        <View>
                            <IconSexy name="symbol-male" size={25} color="#77393e" />
                            <IconSexy name="symbol-female" size={25} color="#77393e" />
                        </View>
                        <TextSex>Todos</TextSex>
                    </SexAll>
                    <SexAll
                        style={{ backgroundColor: isClick == 'M' ? '#e0b0b4' : '#FFF' }}
                        onPress={() => { handleListFilter('M') }}>
                        <IconSexy name="symbol-male" size={30} color="#77393e" />
                        <TextSex>Macho</TextSex>
                    </SexAll>
                    <SexAll
                        style={{ backgroundColor: isClick == 'F' ? '#e0b0b4' : '#FFF' }}
                        onPress={() => { handleListFilter('F') }}>
                        <IconSexy name="symbol-female" size={30} color="#77393e" />
                        <TextSex>Fêmea</TextSex>
                    </SexAll>
                </ContainerSexAll>
            </ContainerSobHeader>
            <FlatListPet
                data={pets}
                keyExtractor={(pet: Pet) => pet.id}
                renderItem={({ item }: { item: Pet }) => (
                    <>
                        <ContainerListInfo onPress={() => { handleNavigateToDetailsPet(item.id) }}>
                            <ImagePet source={{ uri: item.images[0].path }} />
                            <ContainerInfoPet>
                                <NamePet>{item.name_race}</NamePet>
                                <ContainerIconAddress>
                                    <Icon name="map-pin" size={20} color="#77393e" style={{ paddingRight: 8 }} />
                                    <TextInfo>{item.address}</TextInfo>
                                </ContainerIconAddress>

                                <ContainerIconSex>
                                    {
                                        item.sex === 'Fêmea' ?
                                            <IconSexy name="symbol-female" size={20} color="#77393e" style={{ paddingRight: 8 }} /> :
                                            <IconSexy name="symbol-male" size={20} color="#77393e" style={{ paddingRight: 8 }} />
                                    }
                                    <TextInfo>{item.sex}</TextInfo>
                                </ContainerIconSex>

                                <ContainerInfAgeWeight>
                                    <ContainerAgeWeight>
                                        <TextInfo>idade</TextInfo>
                                        <TextInfo>{item.age} Meses</TextInfo>
                                    </ContainerAgeWeight>

                                    <ContainerAgeWeight>
                                        <TextInfo>peso</TextInfo>
                                        <TextInfo>{item.wieght} Kg</TextInfo>
                                    </ContainerAgeWeight>
                                </ContainerInfAgeWeight>

                            </ContainerInfoPet>
                        </ContainerListInfo>
                    </>
                )}
            />
            <ContainerButtonAddPet>
                <ButtonAddPet onPress={() => { navigation.navigate('AddPet') }}>
                    <Icon
                        name="plus-circle" size={45} color="#77393e" />
                </ButtonAddPet>
            </ContainerButtonAddPet>
        </Container>

    );
}

export default PetList;