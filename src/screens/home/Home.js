import React, { useEffect, useRef, useState } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { Image, ImageBackground, Keyboard, StyleSheet, View, TouchableOpacity } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';
import FullScreenModal from '../../components/FullScreenModal';

const Home = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
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
                <ScrollView style={{ padding: 5, margin: 5 }}>
                    <GlobalHeader
                        sourceLeft={require('../../assets/Images/OnericLogo.png')}
                        sourceRight={require('../../assets/Iocns/Dots.png')}
                        styleRight={{ width: 7, height: 28, left: 20 }}
                        sourceRSleftIcon={require('../../assets/Iocns/WalletHeader.png')}
                        TextRSrighttext={'20'}
                        sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
                    />
                    <View style={{ marginTop: 220 }}>
                        <Text style={{ fontSize: 25, alignSelf: 'center' }}> Pending</Text>
                        <Button title='move' onPress={() => navigation.navigate('Contest')} />
                        <TouchableOpacity style={styles.openButton} onPress={toggleModal}>
                            <Text style={styles.openButtonText}>Open Modal</Text>
                        </TouchableOpacity>

                        <FullScreenModal isVisible={isModalVisible} onClose={toggleModal} content={
                            <Image source={require('../../assets/Images/GiftImage.png')} style={{ width: 300, height: 450 }} />
                        } />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>


    )
}

export default Home;

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