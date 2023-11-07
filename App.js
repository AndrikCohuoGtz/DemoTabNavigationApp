import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen (){
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Inicio</Text>
    </View>        
        );
}

function SettingsScreen(){
    return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Configuraciones</Text>
    </View> 
    );
}

const Tab = createBottomTabNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{title: 'Inicio'}}/>
                <Tab.Screen 
                name='Settings'
                component={SettingsScreen}
                options={{title: 'Configuraciones'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}