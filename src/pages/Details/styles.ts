import styled from 'styled-components/native';

export const Container =  styled.View`
    flex: 1;
`;
export const ContainerBody = styled.View`    
    background: #fff3f4;
    flex: 1;
    margin-top: -34px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    padding: 30px;
`;
export const NickDescription = styled.Text`
    font-family: 'Roboto-Regular';
    color: #77393e;
    font-size: 18px;
    margin-bottom: 12px;
`;
export const NamePet = styled.Text`
    font-family: 'Roboto-Bold';
    color: #77393e;
    font-size: 22px;
    margin-bottom: 4px;
`;
export const ContainerInfo = styled.View`
    height: 60px;
    width: 80px; 
    padding: 3px;
    border-radius: 10px;
    border-width: 1px;
    border-color: #77393e;
    margin-left: 4px;
    margin-right: 4px;

`; 
export const ContainerInfPet = styled.View`
    flex-direction: row; 
    justify-content: space-between;
`;
export const TextInfo = styled.Text`
    color: #77393e;
    font-size: 18px;
    font-family: 'Roboto-Regular';
    margin-bottom: 5px;
`;
export const LabelAbout = styled.Text`
    font-family: 'Roboto-Bold';
    color: #77393e;
    font-size: 17px;
    margin-bottom: 4px;
`;
export const TextAbout = styled.Text`
    font-family: 'Roboto-Regular';
    color: #77393e; 
    font-size: 15px;
    margin-bottom: 10px;
`;
export const ButtonLike = styled.TouchableOpacity``;
export const ContainerNameLikes = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;
export const ContainerButtonBackAdaption = styled.View`
    background: #fff3f4;
    flex-direction: row; 
    justify-content: space-around;
    padding: 20px; 
`;
export const ButtonBack = styled.TouchableOpacity``;

export const ImagePet = styled.Image`
    width: 100px;
    height: 120px;
    border-radius: 20px;  
    margin-left: 8px;
    margin-right: 8px; 
    margin-bottom: 8px;
`;
export const ContainerImages = styled.View`
    flex-direction: row;
    
`;