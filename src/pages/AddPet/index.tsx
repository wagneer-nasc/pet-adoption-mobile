import React, { useRef, useState } from 'react';
import { Alert, Image, ScrollView, Text } from 'react-native';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import ImagePicker from 'react-native-image-picker';
import { Modalize } from 'react-native-modalize';
import {
    ButtonBack,
    ContainerButtonAddPet,
    ButtonAddSpecie,
    TextButtonAddSpecie,
    Container,
    Title,
    ContainerHeader,
    ContainerBody,
    ButtonAddSexo,
    TextButtonAddSexo,
    ImageSelectContainer,
    ImageSelect,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../service/api';

interface Sexo {
    female: string,
    male: string,
}
interface Specie {
    dog: string,
    cat: string,
    rodents: string,
    birds: string,
}

const AddPet: React.FC = () => {
    const modalizeRef = useRef<Modalize>(null);
    const modalizeRefSpecie = useRef<Modalize>(null);
    const navigation = useNavigation();


    const [name, setName] = useState<string>('');
    const [specie, setSpecie] = useState<string>('');
    const [sex, setSex] = useState<string>('');
    const [name_race, setName_race] = useState<string>('');
    const [about, setAbout] = useState<string>('');
    const [address, setAdress] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [wieght, setWieght] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [images, setImages] = useState<string[]>([]);



    const onOpenSexo = () => {
        modalizeRef.current?.open();
    };
    const onOpenSpecies = () => {
        modalizeRefSpecie.current?.open();
    };
    const species: Specie = {
        dog: 'Cachorro',
        cat: 'Gato',
        rodents: 'Roedores',
        birds: 'Aves',
    }
    const sexo: Sexo = {
        female: 'Fêmea',
        male: 'Macho'
    }
    async function handleSelectImage() {
        ImagePicker.showImagePicker(
            {
                title: 'Selecione uma imagem',
                cancelButtonTitle: 'Cancelar',
                takePhotoButtonTitle: 'Usar camera',
                chooseFromLibraryButtonTitle: 'Escolher da galeria',
                quality: 1,
                mediaType: "photo",

            }, (response => {
                if (response.didCancel) {
                    return;
                }
                if (response.error) {
                    Alert.alert('Erro ao selecionar uma imagem')
                    return;
                }
                const image = response.uri;
                setImages([...images, image])


            }))
    }

    async function handleCreateStore() {
        const data = new FormData();
        data.append('name', name); 
        data.append('specie', specie);
        data.append('sex', sex === 'Macho' ? 'M' : 'F');
        data.append('name_race', name_race);
        data.append('about', about);
        data.append('address', address);
        data.append('age', age);
        data.append('wieght', wieght);
        data.append('contact', contact);
        images.forEach((image, index) => {
            data.append('images', {
                name: `image_${index}.jpg`,
                type: 'image/jpg',
                uri: image,
            })
        })

        await api.post('/pets', data).then((response) => {

        });
    }



    return (
        <Container>
            <ContainerHeader>
                <Image style={{ height: 180, width: 140 }} source={logo} />
                <Title>
                    Olá, Quer doar seu pet?,{"\n"}
                    Cadastre-o.  <Text><Icon name="heart" size={28} /></Text>
                </Title>
            </ContainerHeader>

            <ContainerBody>
                <ScrollView style={{ flex: 1 }}>
                    <Input
                        editable={false}
                        value={specie}
                        onChangeText={setSpecie}
                        onTouchStart={onOpenSpecies}
                        name="specie"
                        placeholder="Especie" />
                    <Input
                        name="name"
                        value={name}
                        onChangeText={setName}
                        placeholder="Nome do pet" />

                    <Input
                        onChangeText={setName_race}
                        value={name_race}
                        name="name_race"
                        placeholder="Nome da raça do pet" />
                    <Input
                        value={about}
                        onChangeText={setAbout}
                        name="about"
                        placeholder="Sobre"
                        height={160}
                        multiline />
                    <Input
                        editable={false}
                        value={sex}
                        onChangeText={setSex}
                        onTouchStart={onOpenSexo}
                        name="sex"
                        placeholder="Sexo" />
                    <Input
                        value={address}
                        onChangeText={setAdress}
                        name="address"
                        placeholder="Cidade e estado" />
                    <Input
                        value={wieght}
                        onChangeText={setWieght}
                        name="wieght"
                        placeholder="Peso" />
                    <Input
                        value={age}
                        onChangeText={setAge}
                        name="age"
                        placeholder="Idade em meses" />
                    <Input
                        value={contact}
                        name="contact"
                        onChangeText={setContact}
                        placeholder="Whatts do dono do pet" />
                    <ImageSelectContainer>
                        {images.map((imag, index) => {
                            return (

                                <ImageSelect
                                    key={index}
                                    source={{ uri: imag }}
                                />
                            );
                        })}
                    </ImageSelectContainer>
                    <Button
                        width={351}
                        onPress={() => { handleSelectImage() }}
                    >Images
                    </Button>
                </ScrollView>
            </ContainerBody>

            <ContainerButtonAddPet>
                <ButtonBack onPress={() => { navigation.goBack() }}
                    style={{ padding: 10 }}>
                    <Icon name="corner-down-left" size={30} color='#77393e' />
                </ButtonBack>
                <Button onPress={() => { handleCreateStore() }}
                >Cadastrar</Button>
            </ContainerButtonAddPet>
            <Modalize
                modalHeight={200}
                ref={modalizeRef}
                modalStyle={{
                    backgroundColor: '#fff3f4',
                }}>
                <ButtonAddSexo onPress={() => { setSex('Fêmea') }}>
                    <TextButtonAddSexo
                    >{sexo.female}</TextButtonAddSexo>
                </ButtonAddSexo>
                <ButtonAddSexo onPress={() => { setSex('Macho') }}>
                    <TextButtonAddSexo
                    >{sexo.male}</TextButtonAddSexo>
                </ButtonAddSexo>
            </Modalize>
            <Modalize
                modalHeight={200}
                ref={modalizeRefSpecie}
                modalStyle={{
                    backgroundColor: '#fff3f4',
                }}>
                <ButtonAddSpecie onPress={() => { setSpecie('Cachorro') }}>
                    <TextButtonAddSpecie>{species.dog}</TextButtonAddSpecie>
                </ButtonAddSpecie>
                <ButtonAddSpecie onPress={() => { setSpecie('Gato') }}>
                    <TextButtonAddSpecie>{species.cat}</TextButtonAddSpecie>
                </ButtonAddSpecie>
                <ButtonAddSpecie onPress={() => { setSpecie('Roedores') }}>
                    <TextButtonAddSpecie>{species.rodents}</TextButtonAddSpecie>
                </ButtonAddSpecie>
                <ButtonAddSpecie onPress={() => { setSpecie('Aves') }}>
                    <TextButtonAddSpecie>{species.birds}</TextButtonAddSpecie>
                </ButtonAddSpecie>
            </Modalize>
        </Container >
    );
}

export default AddPet;