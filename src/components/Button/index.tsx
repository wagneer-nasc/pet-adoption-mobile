import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: string,
    color?: string,
    width?: number,
}

const Button: React.FC<ButtonProps> = ({ children, color, width, ...rest }) => {
    return (
        <Container  style={width ? { width: width } : { width: 250 }}
        {...rest}>
          
            <ButtonText >
                {children}
            </ButtonText>
        </Container>)
}

export default Button;