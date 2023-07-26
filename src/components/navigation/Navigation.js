import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Contest, CreateTeam, DetailsVerify, Home, JoinContest, LeagueSetting, Login, OtpVerification, ProfileSetupOne, ProfileSetupTwo, Splash, TeamOne, TeamTwo, UpCommingMatches, Wallet } from '../../screens/Index';
import FullScreenModalProfile from '../../screenComponents/FullScreenModalProfile';
import GlobalHeader from '../GlobalHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
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
                <Stack.Screen name="Home" component={MyTabs} />
                <Stack.Screen name="Contest" component={Contest} />
                <Stack.Screen name="LeagueSetting" component={LeagueSetting} />
                <Stack.Screen name="DetailsVerify" component={MyTabs} />
                <Stack.Screen name="Wallet" component={MyTabs} />
                <Stack.Screen name="TeamOne" component={MyTabs} />
                <Stack.Screen name="TeamTwo" component={TeamTwo} />
                <Stack.Screen name="CreateTeam" component={CreateTeam} />
                <Stack.Screen name="JoinContest" component={JoinContest} />
                <Stack.Screen name="UpCommingMatches" component={UpCommingMatches} />
                <Stack.Screen name="ProfileSetupOne" component={ProfileSetupOne} />
                <Stack.Screen name="ProfileSetupTwo" component={ProfileSetupTwo} />

                {/* @screen Components */}
                <Stack.Screen name="FullScreenModalProfile" component={FullScreenModalProfile} />
                {/* @Components */}
                <Stack.Screen name="GlobalHeader" component={GlobalHeader} />
            </Stack.Navigator>
        </NavigationContainer>


    )
}


// @bottom navigations
function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                tabBarLabelStyle:{bottom:7},
                tabBarActiveTintColor: "#ffff",
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarInactiveTintColor: '#b4a79b',
                tabBarStyle: {
                    height: 73,
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    backgroundColor: '#FF0F0F',
                    borderTopWidth: 0,
                },
            })}

        >
            {/* @screens */}
            <Tab.Screen name="Home " component={Home}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Image source={require('../../assets/Iocns/HomeBottom.png')} />
                        )
                    },
                }} />
            <Tab.Screen name="My matches " component={TeamOne}
                options={{

                    tabBarIcon: ({ focused, color }) => {

                        return (

                            <Image source={require('../../assets/Iocns/BottomBatImg.png')} />
                        )
                    },
                }} />
            <Tab.Screen name="Rewards" component={Wallet}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Image source={require('../../assets/Iocns/RewardsBottom.png')} />
                        )
                    },
                }} />
            <Tab.Screen name="Winner" component={DetailsVerify}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Image source={require('../../assets/Iocns/MedalBttom.png')} />
                        )
                    },
                }} />

        </Tab.Navigator>
    );
}

export default Navigation;