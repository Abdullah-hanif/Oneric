import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Contest, DetailsVerify, Home, LeagueSetting, Login, OtpVerification, Splash } from '../../screens/Index';
import FullScreenModalProfile from '../../screenComponents/FullScreenModalProfile';
import GlobalHeader from '../GlobalHeader';

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
                <Stack.Screen name="Contest" component={Contest} />
                <Stack.Screen name="LeagueSetting" component={LeagueSetting} />
                <Stack.Screen name="DetailsVerify" component={DetailsVerify} />

                {/* @screen Components */}
                <Stack.Screen name="FullScreenModalProfile" component={FullScreenModalProfile} />
                {/* @Components */}
                <Stack.Screen name="GlobalHeader" component={GlobalHeader} />
            </Stack.Navigator>
        </NavigationContainer>
        
        
    )
}

export default Navigation;