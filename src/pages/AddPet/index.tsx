import React, { useRef, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
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
    ContainerInput,
    ButtonAddSexo,
    TextButtonAddSexo,
    ImageSelectContainer,
    ImageSelect,
    ContainerBody,
    TextInfo,
    ButtonDeleteImage,
    ButtonTextModalize,
    ImageSelectDelete,

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
    const modalizeRefDeleteImage = useRef<Modalize>(null);
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
    const [indexDeleteImage, setIndexDeleteImage] = useState<number>();
    let sizeImages: number = images.length;
    let sizeImagesPermition: number = 3;

    const onOpenSexo = () => {
        modalizeRef.current?.open();
    };
    const onOpenSpecies = () => {
        modalizeRefSpecie.current?.open();
    };
    const onOpenModalizeDeleteImage = (imageIndex: number) => {
        setIndexDeleteImage(imageIndex);
        modalizeRefDeleteImage.current?.open();
    };
    const onCloseModalize = () => {
        modalizeRefDeleteImage.current?.close();
        modalizeRef.current?.close();
        modalizeRefSpecie.current?.close();
    }

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
        if (sizeImages === sizeImagesPermition) {
            return Alert.alert('Permitido apenas 3 imagens');
        }
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
    function handleSelectImageDelete() {
        images.splice(indexDeleteImage ? indexDeleteImage : -1, 1);
        setImages([...images])
        onCloseModalize();
    }

    async function handleCreateStore() {

        if (!name || !specie || !sex || !name_race || !about ||
            !address || !age || !wieght || !contact) {
            return Alert.alert('Todos os campos são obrigatórios');
        }

        if (sizeImages !== sizeImagesPermition) {
            return Alert.alert('Escolha 3 imagens :)');
        }

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
            if (response.data) {
                Alert.alert('Cadastrado com sucesso.');
                navigation.navigate('Index');
            }
        });
    }

    return (
        <Container>
            <ContainerHeader>
                <Image style={{ height: 180, width: 140 }} source={logo} />
                <Title>
                    Olá, Quer doar seu pet?{"\n"}
                    Cadastre-o.  <Text><Icon name="heart" size={28} /></Text>
                </Title>
            </ContainerHeader>
            <ContainerBody>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    enabled
                >
                    <ScrollView>
                        <ContainerInput>
                            <TextInfo>Escolha a Especie do seu pet</TextInfo>
                            <Input
                                editable={false}
                                value={specie}
                                onChangeText={setSpecie}
                                onTouchStart={onOpenSpecies}
                                name="specie" />
                            <TextInfo>Digite o nome do seu pet</TextInfo>
                            <Input
                                name="name"
                                value={name}
                                onChangeText={setName}
                                returnKeyType="next"
                                maxLength={22} />
                            <TextInfo>Digite a Raça do seu pet</TextInfo>
                            <Input
                                onChangeText={setName_race}
                                value={name_race}
                                name="name_race"
                                maxLength={22}
                                returnKeyType="next" />
                            <TextInfo>Conte um pouco sobre o seu pet ...</TextInfo>
                            <Input
                                value={about}
                                onChangeText={setAbout}
                                name="about"
                                height={160}
                                maxLength={200}
                                returnKeyType="next"
                                multiline />
                            <TextInfo>Escolha o sexo do seu pet </TextInfo>
                            <Input
                                editable={false}
                                value={sex}
                                onChangeText={setSex}
                                onTouchStart={onOpenSexo}
                                name="sex"
                                returnKeyType="next" />
                            <TextInfo>Digite a Cidade e o Estado do seu pet </TextInfo>
                            <Input
                                value={address}
                                onChangeText={setAdress}
                                name="address"
                                returnKeyType="next" />
                            <TextInfo>Digite o peso do seu pet</TextInfo>
                            <Input
                                value={wieght}
                                onChangeText={setWieght}
                                name="wieght"
                                keyboardType="numeric"
                                returnKeyType="next" />
                            <TextInfo>Digite a idade em meses do seu pet </TextInfo>
                            <Input
                                value={age}
                                onChangeText={setAge}
                                name="age"
                                returnKeyType="next"
                                keyboardType="numeric" />
                            <TextInfo>Digite um numero para contato</TextInfo>
                            <Input
                                value={contact}
                                name="contact"
                                onChangeText={setContact}
                                keyboardType="numeric" />

                            <TextInfo>Escolha 3 images</TextInfo>

                            <ImageSelectContainer>
                                {images.map((imag, index) => {
                                    return (
                                        <ImageSelectDelete onPress={() => {
                                            const imageIndex = images.findIndex(imageArray => imageArray == imag);
                                            onOpenModalizeDeleteImage(imageIndex);
                                        }}>
                                            <ImageSelect
                                                key={index}
                                                source={{ uri: imag }}
                                            />
                                        </ImageSelectDelete>
                                    );
                                })}
                            </ImageSelectContainer>
                            <Button
                                width={351}
                                onPress={() => { handleSelectImage() }}
                            >Images
                    </Button>

                        </ContainerInput>
                    </ScrollView>
                </KeyboardAvoidingView>
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
                <ButtonAddSexo onPress={() => { setSex('Fêmea'), onCloseModalize() }}>
                    <TextButtonAddSexo
                    >{sexo.female}</TextButtonAddSexo>
                </ButtonAddSexo>
                <ButtonAddSexo onPress={() => { setSex('Macho'), onCloseModalize() }}>
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
                <ButtonAddSpecie onPress={() => { setSpecie('Cachorro'), onCloseModalize() }}>
                    <TextButtonAddSpecie>{species.dog}</TextButtonAddSpecie>
                </ButtonAddSpecie>
                <ButtonAddSpecie onPress={() => { setSpecie('Gato'), onCloseModalize() }}>
                    <TextButtonAddSpecie>{species.cat}</TextButtonAddSpecie>
                </ButtonAddSpecie>
                <ButtonAddSpecie onPress={() => { setSpecie('Roedores'), onCloseModalize() }}>
                    <TextButtonAddSpecie>{species.rodents}</TextButtonAddSpecie>
                </ButtonAddSpecie>
                <ButtonAddSpecie onPress={() => { setSpecie('Aves'), onCloseModalize() }}>
                    <TextButtonAddSpecie>{species.birds}</TextButtonAddSpecie>
                </ButtonAddSpecie>
            </Modalize>
            <Modalize
                ref={modalizeRefDeleteImage}
                modalHeight={100}
                modalStyle={{
                    backgroundColor: '#fff3f4',
                }}>
                <ButtonDeleteImage>
                    <ButtonTextModalize onPress={() => handleSelectImageDelete()}>
                        Deletar imagem
                        </ButtonTextModalize>
                </ButtonDeleteImage>

            </Modalize>
        </Container >
    );
}

export default AddPet;