import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../../src/pages/Details';
import Index from '../../src/pages/Index';
import PetList from '../../src/pages/PetList';

const NoPrivate = createStackNavigator();

const RoutesNoPrivate: React.FC = () => {
    return (
        <NoPrivate.Navigator
            screenOptions={{
                headerShown: false, 
            }}>
            <NoPrivate.Screen name="Index" component={Index} />
            <NoPrivate.Screen name="PetList" component={PetList} />
            <NoPrivate.Screen name="Details" component={Details} />

        </NoPrivate.Navigator>
    );
}
export default RoutesNoPrivate;
