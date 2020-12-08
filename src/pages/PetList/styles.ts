import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Pet } from './index';

export const Container = styled.View`
    flex: 1;
    background: #fff3f4;      
`;
export const ContainerSobHeader = styled.View`
    margin-top: 95px; 
    align-items: center; 
    padding: 10px;
`;
export const ContainerHeader = styled.View` 
    position: absolute;
    margin-top: 50px; 
    flex-direction: row;
    align-items: center;  
`;
export const TitleHeader = styled.Text`
    font-family: 'Roboto-Bold';
    color: #77393e;
    font-size: 24px;
    padding-left: 100px;
`;
export const ButtonBack = styled.TouchableOpacity`
    padding-left: 40px;
`;
export const FlatListPet = styled(FlatList as new () => FlatList<Pet>)`
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
    width: 140px;
    height: 200px;
    border-radius: 20px;   
`;
export const ContainerInfoPet = styled.View`
    flex-direction: column;
    padding: 10px;
`;
export const NamePet = styled.Text`    
    font-family: 'Roboto-Bold';
    color: #77393e;
    font-size: 20px;
    margin-bottom: 8px;
`;
export const TextInfo = styled.Text`
    color: #77393e;
    font-size: 18px;
    font-family: 'Roboto-Regular';
    margin-bottom: 5px;
`;
export const ContainerAgeWeight = styled.View`
     height: 60px;
     width: 90px; 
     padding: 3px;
     border-radius: 10px;
     border-width: 1px;
     border-color: #77393e;
     margin-left: 1px;
     margin-right: 1px;

     align-items: center;
     justify-content: center;
     
`; 
export const ContainerIconAddress = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
`;
export const ContainerInfAgeWeight = styled.View`
    flex-direction: row; 
`;
export const ContainerIconSex = styled.View`
    flex-direction: row;
    margin-bottom: 25px;

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

export const ContainerSexAll = styled.View`      
   flex-direction: row;
   margin-bottom: 10px;    
 `;
export const SexAll = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #FFF;
    height: 140px;
    width: 95px;
    border-radius: 30px; 
    border-width: 1px;
    border-color: #77393e;
    padding: 20px;   
    margin-right: 10px;
    margin-left: 10px;
`;

export const TextSex = styled.Text`
   font-size: 16px;
   font-family: 'Roboto-Regular';
   color: #77393e;
`;