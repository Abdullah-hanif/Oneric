import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { countryData } from '../../CountryData';
import RedButton from '../../components/RedButton';

const Splash = ({ navigation }) => {
    const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const onSelectCountry = (country) => {
        setSelectedCountry(country);
    };

    const onChangePhoneNumber = (number) => {
        setPhoneNumber(number);
    };

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    return (

        <ImageBackground source={require('../../assets/Images/BgImage.png')} style={{ flex: 1 }}>
            <View style={styles.main} >
                <View style={{ position: 'absolute', height: '100%', justifyContent: 'flex-end' }}>
                    <Image source={require('../../assets/Images/SplashBottomLeft.png')} style={{ height: 330, width: 330 }} />
                </View>
                <View style={{ position: 'absolute' }}>
                    <Image source={require('../../assets/Images/SplashBottomRight.png')} />
                </View>
                {/* for logo */}
                <View style={{alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>(navigation.navigate('Login'))} style={{elevation:4,position:'absolute',flexDirection:'column',top:'80%',backgroundColor:'#353535',width:310,height:58,alignSelf:'center',alignItems:'center',borderRadius:35,zIndex:9999,justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'700',color:'#fff'}}>Get Started</Text>
                    </TouchableOpacity>
                <Image source={require('../../assets/Images/OnericLogo.png')} style={{alignSelf:'center',width:183,height:178,marginTop:'10%'}}/>
               <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:48,fontWeight:"200"}}>Let's Get</Text>
                <Text style={{fontSize:48,fontWeight:"700",color:'#FF0F0F'}}>Started</Text>
                </View>
                <View style={{width:'80%',alignSelf:'center',height:90}}>
                <Text style={{fontSize:16,fontWeight:"400",color:'black',textAlign:'center'}}>Enjoy the best radio stations from your home, don't miss out on anything</Text>
                </View>
                <View>
                    <Image source={require('../../assets/Images/FootballerImage.png')} style={{height:340,width:400}}/>
                </View>
                </View>

            </View>
        </ImageBackground>


    )
}

export default Splash;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
    },


    flagIcon: {
        width: 35,
        height: 35,
        marginRight: 5,
        borderRadius: 100
    },
    countryCode: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    phoneNumberInput: {
        fontSize: 14,
        height: '100%',
        width: '65%',
        borderLeftWidth: 1,
        borderLeftColor: '#FFFF',
        paddingLeft: 10,
        marginLeft: 12,
        color: '#FFFF'

    },
    switchContainer: {
        flexDirection: 'row',
        width: '85%'
    },
    switchLabel: {
        fontSize: 12,
        marginRight: 10,
        textAlign: 'justify',
        top: 18,
        color: '#1D1E22'
    },
    switchStatus: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})