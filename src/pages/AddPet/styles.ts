import { FlatList } from 'react-native';
import styled from 'styled-components/native'; 

export const Container = styled.View`
    flex: 1;
    background: #77393e;
  
`;
export const Title = styled.Text`
     font-family: 'Roboto-Bold';
     font-size: 22px;
     color: #fff3f4; 
`;
export const ContainerHeader = styled.View`
    margin-top: 60px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 34px;
`;
export const ContainerBody = styled.View`    
    flex: 1;
    background: #fff3f4;
    margin-top: -34px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    padding: 30px;

    flex-direction: column;
`;  
export const ButtonBack = styled.TouchableOpacity``;

export const ContainerButtonAddPet = styled.View`
    background: #fff3f4;
    flex-direction: row; 
    justify-content: space-around;
    padding: 15px; 
`;
export const ButtonAddSexo = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    
    padding: 8px;
`;
export const ButtonAddSpecie = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    padding: 8px;
`;
export const TextButtonAddSexo = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 19px;
    color: #77393e;
`;
export const TextButtonAddSpecie = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 19px;
    color: #77393e;
`;
export const ImageSelect = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 20px;
    margin-bottom: 32px;
    margin-right: 6px;
    margin-left: 6px;
`;
export const ImageSelectContainer= styled.View`
    flex-direction: row;
`;