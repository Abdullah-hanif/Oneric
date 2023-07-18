import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Home, Login, OtpVerification, Splash } from '../../screens/Index';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="OtpVerification" component={OtpVerification} />
                <Stack.Screen name="Home" component={Home} />
                
            </Stack.Navigator>
        </NavigationContainer>
        
        
    )
}

export default Navigation;