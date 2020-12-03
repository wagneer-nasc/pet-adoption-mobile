import React from 'react';
import { Container, ContainerHeader, TitleHeader, TextInfo, ContainerIconSex, ContainerAgeWeight, ContainerIconAddress, ButtonBack, ContainerBody, FlatListPet, ContainerListInfo, NamePet, ImagePet, ContainerInfoPet, ContainerInfAgeWeight } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import IconSexy from 'react-native-vector-icons/SimpleLineIcons';
import SexyList from '../../components/SexyList';

export interface Data {
    image: string;
    name: string,
    adress: string,
    age: string,
    sex: string,
    weight: string,
    id: string,
}

const PetList: React.FC = () => {
    const data: Data[] = [
        {
            id: '01',
            image: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
            name: 'Lebrador Retriever',
            adress: 'Brasil, Recife-PE',
            age: '8 month',
            sex: 'Female',
            weight: '8,4 kg',
        }, {
            id: '02',
            image: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
            name: 'Shetland',
            adress: 'Brasil, Recife-PE',
            age: '8 month',
            sex: 'Male',
            weight: '8,4 kg',
        }
        , {
            id: '03',
            image: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/06/Cachorro-correndo-iStock.jpg',
            name: 'PitBull',
            adress: 'Brasil, Recife-PE',
            age: '8 month',
            sex: 'Male',
            weight: '8,4 kg',
        }
    ]
    console.log(data)

    return (

        <Container>
            <ContainerHeader>
                <ButtonBack>
                    <Icon name="arrow-left" size={35} color="#77393e" />
                </ButtonBack>
                <TitleHeader>Dog</TitleHeader>
            </ContainerHeader>

            <ContainerBody>
                <SexyList />
            </ContainerBody>
            <FlatListPet
                data={data}
                keyExtractor={(pet: Data) => pet.id}
                renderItem={({ item }: { item: Data }) => (
                    <>
                        <ContainerListInfo>
                            <ImagePet source={{ uri: item.image }} />
                            <ContainerInfoPet>
                                <NamePet>{item.name}</NamePet>
                                <ContainerIconAddress>
                                    <Icon name="map-pin" size={20} color="#77393e" style={{ paddingRight: 8 }} />
                                    <TextInfo>{item.adress}</TextInfo>
                                </ContainerIconAddress>

                                <ContainerIconSex>
                                    {item.sex == 'Female' ?
                                        <IconSexy name="symbol-female" size={20} color="#77393e" style={{ paddingRight: 8 }} /> :
                                        <IconSexy name="symbol-male" size={20} color="#77393e" style={{ paddingRight: 8 }} />
                                    }
                                    <TextInfo>{item.sex}</TextInfo>
                                </ContainerIconSex>

                                <ContainerInfAgeWeight>
                                    <ContainerAgeWeight>
                                        <TextInfo>Age</TextInfo>
                                        <TextInfo>{item.age}</TextInfo>
                                    </ContainerAgeWeight>

                                    <ContainerAgeWeight>
                                        <TextInfo>Weight</TextInfo>
                                        <TextInfo>{item.weight}</TextInfo>
                                    </ContainerAgeWeight>
                                </ContainerInfAgeWeight>

                            </ContainerInfoPet>

                        </ContainerListInfo>
                    </>
                )}

            />

        </Container>

    );
}

export default PetList;