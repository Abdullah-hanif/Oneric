import React, { useRef, useState, useEffect } from 'react';
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { countryData } from '../../CountryData';
import RedButton from '../../components/RedButton';

const OtpVerification = ({ navigation }) => {
    const [otp, setOtp] = useState('');
    const [remainingTime, setRemainingTime] = useState(60);
    const inputRefs = Array(7)
        .fill()
        .map((_, index) => useRef(null));

    const handleInputChange = (value, index) => {
        setOtp((prevOtp) => {
            const updatedOtp = prevOtp.split('');
            updatedOtp[index] = value;
            return updatedOtp.join('');
        });

        if (value && index < 6) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleInputFocus = (index) => {
        if (!otp[index]) {
            inputRefs[index].current.focus();
        }
    };

    const handleInputBlur = () => {
        Keyboard.dismiss();
    };

    useEffect(() => {
        let timer;
        if (remainingTime > 0) {
            timer = setInterval(() => {
                setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
            }, 1000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [remainingTime]);

    useEffect(() => {
        // Reset the timer when the component mounts or when OTP is successfully received
        setRemainingTime(60);
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
                    <Image source={require('../../assets/Images/OnericLogo.png')} />

                    {/* for main content */}

                    <ScrollView style={{ padding: 5, margin: 5 }} >
                        <Text style={{ fontSize: 35, fontWeight: '900', }}>OTP <Text style={{ fontWeight: '300' }}>Verification</Text></Text>
                        <Text style={{ fontSize: 25, fontWeight: '200' }}>Please enter the OTP sent to</Text>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: '#0D8BEE' ,textDecorationLine:'underline'}}>+91 78145799499</Text>

                        <View style={{ marginTop: 19 }}>
                            <Text style={{ fontWeight: 400, fontSize: 16 }}>Enter OTP</Text>
                        </View>

                        <View style={styles.otpContainer}>
                            {inputRefs.map((inputRef, index) => (
                                <TouchableOpacity
                                    key={index}
                                    activeOpacity={1}
                                    style={[styles.otpInputContainer, { borderColor: otp[index] ? '#fff' : '#ccc' }]}
                                    onPress={() => handleInputFocus(index)}
                                >
                                    <TextInput
                                        ref={inputRef}
                                        style={styles.otpInput}
                                        value={otp[index] || ''}
                                        onChangeText={(value) => handleInputChange(value, index)}
                                        maxLength={1}
                                        keyboardType="number-pad"
                                        secureTextEntry={false}
                                        placeholder='0'
                                        placeholderTextColor={'#fff'}
                                    //   onBlur={handleInputBlur}
                                    />
                                </TouchableOpacity>
                            ))}

                        </View>
                        <View style={styles.container}>
                            {remainingTime > 0 ? (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Iocns/OtpTimer.png')} style={{ height: 24, width: 24 }} />
                                    <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>

                                </View>
                            ) : (
                                <Text style={styles.timerTextExpire}>Time Expired!</Text>
                            )}
                        </View>
                        <View style={{ marginTop: '15%' }}>
                            <RedButton
                                text={'Verify'}
                                iconImg={require('../../assets/Iocns/RightArrow.png')}
                                onPress={() => (navigation.navigate('Home'))}
                            />
                        </View>

                    </ScrollView>

                </View>

            </View>
        </ImageBackground>


    )
}

export default OtpVerification;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
    },





    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1D1E22',
        height: 53,
        width: '100%',
        borderRadius: 35,
        elevation: 2,
        alignSelf: 'center',
        marginTop: '5%'
    },
    otpInputContainer: {
        borderRightWidth: 1,
        borderColor: '#ccc',
        borderRadius: 0,
        width: 45,
        justifyContent: 'center',

    },
    otpInput: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        width: 111,
        height: 35,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: '5%',

    },
    timerText: {
        fontSize: 16,
        fontWeight: 'bold',
        left: 5
    },
    timerTextExpire: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },

})