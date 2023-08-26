import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { countryData } from '../../CountryData';
import RedButton from '../../components/RedButton';
// firebase configuration
import firebase from "firebase/compat/app";
import { firebaseConfig } from '../../../config';
// import firebase from 'firebase/compat/app';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

const Login = ({ navigation }) => {
    const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    // for firebase
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false); // New state for validation
    const [isLoading, setIsLoading] = useState(false); // New state for validation

    const sendVerification = () => {
        setIsLoading(true);
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then((verificationId) => {
                setVerificationId(verificationId);
                setPhoneNumber('');
                setIsLoading(false);
                // Navigate to OtpVerification screen
                navigation.navigate('OtpVerification', { verificationId, phoneNumber }); // Make sure 'OtpVerification' matches your screen name

            })
            .catch((error) => {
                console.error('Verification Error:', error);
                Alert.alert('Verification Error', 'An error occurred during verification.');
                setIsLoading(false);
            });
            setIsLoading(false);
    };





    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
            })
            .catch((error) => {
                alert(error);
            })
        Alert.alert('Login succesfully');
    }

    // firebase end

    const onSelectCountry = (country) => {
        setSelectedCountry(country);
    };

    const onChangePhoneNumber = (number) => {
        const phoneNumberRegex = /^\+?\d{10,13}$/; // Custom regex for 10 to 13 digits
        const isValid = phoneNumberRegex.test(number);
        setIsPhoneNumberValid(isValid);
        setPhoneNumber(number);
    };


    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    return (

        <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
            <View style={styles.main} >
                <View style={{ position: 'absolute', height: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <Image source={require('../../assets/Images/BottomLeftbackground.png')} style={{ height: 330, width: 330 }} />
                </View>
                <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', left: 10 }}>
                    <Image source={require('../../assets/Images/TopRightBackground.png')} />
                </View>
                {/* for logo */}
                <View style={{ padding: 10, margin: 10, marginTop: 100 }}>
                    <FirebaseRecaptchaVerifierModal
                        ref={recaptchaVerifier}
                        firebaseConfig={firebaseConfig}
                    />
                    <Image source={require('../../assets/Images/OnericLogo.png')} style={{ resizeMode: 'contain' }} />

                    {/* for main content */}

                    <ScrollView style={{ padding: 5, margin: 5 }} >
                        <Text style={{ fontSize: 35, fontWeight: '900', }}>Log In</Text>
                        <Text style={{ fontSize: 25, fontWeight: '200' }}>to start play</Text>

                        <View style={{ marginTop: 19 }}>
                            <Text style={{ fontWeight: 400, fontSize: 16 }}>Enter phone number</Text>
                            <KeyboardAvoidingView  >
                                <View style={{ backgroundColor: '#1D1E22', alignItems: 'center', flexDirection: 'row', marginTop: 15, borderWidth: 1, height: 53, width: '95%', padding: 0, alignSelf: 'center', borderRadius: 25 }}>
                                    <TouchableOpacity style={{ left: 5, flexDirection: 'row', alignItems: 'center' }} onPress={() => alert('Implement country picker here')}>
                                        <Image source={{ uri: selectedCountry.flag }} style={styles.flagIcon} />
                                        <Text style={styles.countryCode}>{selectedCountry.code}</Text>
                                    </TouchableOpacity>

                                    <TextInput
                                        value={phoneNumber}
                                        onChangeText={onChangePhoneNumber}
                                        style={styles.phoneNumberInput}
                                        placeholder="000 000 000 000"
                                        keyboardType="phone-pad"
                                        placeholderTextColor={'#FFFFFF'}
                                        maxLength={13}

                                    />
                                    <Image source={require('../../assets/Iocns/MobileIcon.png')} />
                                </View>
                            </KeyboardAvoidingView>
                        </View>
                        <View style={styles.switchContainer}>
                            <Switch
                                trackColor={{ false: '#1D1E22', true: '#1D1E22' }}
                                thumbColor={isEnabled ? '#5AC73D' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={styles.switchLabel}>I confirm that I am an Indian citizen of 18+ age and do
                                not belong to the states of Assam, Odisha, Nagaland,
                                Sikkim, Andhra Pradesh and Telangana and please make sure your entire number minimum 12.</Text>
                        </View>
                        <View style={{ marginTop: '15%' }}>
                            <RedButton
                                text={isLoading == true ? <ActivityIndicator size={'small'} color={'white'}/> : 'Next'}
                                iconImg={require('../../assets/Iocns/RightArrow.png')}
                                onPress={sendVerification}
                                disabled={!isPhoneNumberValid || !isEnabled} // Disable if either phone number is invalid or switch is not enabled
                                isEnabled={isEnabled}
                                isPhoneNumberValid={isPhoneNumberValid}
                            />
                        </View>

                    </ScrollView>

                </View>

            </View>
        </ImageBackground>


    )
}

export default Login;

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