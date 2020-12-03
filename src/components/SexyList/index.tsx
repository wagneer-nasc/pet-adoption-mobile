import React from 'react';
import { Text, View } from 'react-native';
import { ContainerSexAll, ContainerSexMale, ContainerSexFemale, SexAll, SexMale, SexFemale, Container, TextSex } from './styled';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
const SexyList: React.FC = () => {

    return (
        <Container>
            <ContainerSexAll>
                <SexAll>
                    <View>
                        <Icon name="symbol-male" size={25} color="#77393e" />
                        <Icon name="symbol-female" size={25} color="#77393e" />
                    </View>
                    <TextSex>
                        All
                    </TextSex>
                    <TextSex>
                        90
                    </TextSex>
                </SexAll>
            </ContainerSexAll>
            <ContainerSexMale>
                <SexMale>

                    <View>
                        <Icon name="symbol-male" size={30} color="#77393e" />

                    </View>
                    <TextSex>
                        Male
                    </TextSex>
                    <TextSex>
                        90
                    </TextSex>

                </SexMale>
            </ContainerSexMale>
            <ContainerSexFemale>
                <SexFemale>
                    <View>
                        <Icon name="symbol-female" size={30} color="#77393e" />
                    </View>
                    <TextSex>
                        Female
                    </TextSex>
                    <TextSex>
                        90
                    </TextSex>
                </SexFemale>
            </ContainerSexFemale>

        </Container>

    );
}

export default SexyList;