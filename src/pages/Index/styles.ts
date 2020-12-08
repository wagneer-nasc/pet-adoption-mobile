import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Pet } from './index';

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
    background: #fff3f4;
    margin-top: -34px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    padding: 30px;

    flex-direction: row;
`;
export const ContainerImage = styled.TouchableOpacity`
    background: #fff;
    border-radius: 22px;
    align-items: center; 
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    height: 200px;
    margin-left: 10px;
`;
export const NamePet = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 22px;
    color: #77393e;
`;
export const ContainerSeeMore = styled.View`
    flex-direction: row;
    padding: 10px;
`;
export const SeeMoreText = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 16px;
    color: #77393e;
`;
export const ContainerRecomendation = styled.View`
    flex: 1;
    background: #fff3f4;
`;
export const TextRecomendation = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 18px;
    color: #77393e;
    margin-left: 130px;
`;
export const FlatListPetRecomendation = styled(FlatList as new () => FlatList<Pet>)`
     padding: 10px 25px 16px;    
`;

export const ContainerListInfo = styled.TouchableOpacity`
    background: #FFFF;
    border-radius: 20px; 
    padding: 20px;
    margin-bottom: 10px;

    flex-direction: row;
`;
export const ImagePet = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 20px;   
`;
export const ContainerInfoPet = styled.View`
    flex-direction: column;
    padding: 10px;
`;
export const TextInfo = styled.Text`
    color: #77393e;
    font-size: 18px;
    font-family: 'Roboto-Regular';
    margin-bottom: 5px;
`;
export const ContainerViews = styled.View`
     height: 60px;
     width: 60px;  
     border-radius: 10px;
     border-width: 1px;
     border-color: #77393e;
     margin-left: 190px;    
     position: absolute; 

     margin-top: 15px;      

     justify-content: center;
     align-items: center;
     
`;  
export const NamePetList = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 18px;
    color: #77393e;
    
`;
export const ContainerButtonAddPet = styled.View`
    background: #fff3f4;    
    padding: 18px;
    align-items: center;
    justify-content: center;
    
`;
export const ButtonAddPet = styled.TouchableOpacity`
    margin-bottom: 13px;
`;
export const ContainerIconSex = styled.View`
    flex-direction: row;  
    margin-top: 15px;
`;