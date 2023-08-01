import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';

const PrivacyAndPolicy = ({ navigation }) => {
    const [showContent, setShowContent] = useState(false);
    const [showContentTwo, setShowContentTwo] = useState(false);

    const toggleContent = () => {
        setShowContent((prevShowContent) => !prevShowContent);
    };
    const toggleContentTwo = () => {
        setShowContentTwo((prevShowContent) => !prevShowContent);
    };
    return (
        <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
            <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', left: 10 }}>
                <Image source={require('../../assets/Images/TopRightBackground.png')} />
            </View>

            <ScrollView style={styles.main} >
                <GlobalHeader
                    sourceLeft={require('../../assets/Iocns/Back.png')}
                    styleLeft={{ width: 25, height: 20 }}
                    sourceRight={require('../../assets/Images/OnericLogo.png')}
                    styleRight={{ width: 49, height: 47, left: 20 }}
                    sourceLeftOnPress={() => navigation.goBack()}
                />
                <View style={{ marginTop: 5, padding: 5, margin: 5, }}>
                    <View style={{ flexDirection: 'column', left: 10 }}>
                        <Text style={{ fontWeight: '700', fontSize: 32 }}>Privacy & Policy</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#3A3A3A ',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 10
                        }}
                    />
                    <View style={{ width: '95%', alignSelf: 'center', minHeight: 55, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={toggleContent} style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Some info about app</Text>
                            <View>
                                {showContent == true ?
                                    <Image source={require('../../assets/Iocns/ArrowDownBlack.png')} style={{ width: 20, height: 20 }} />
                                    :
                                    <Image source={require('../../assets/Iocns/ArrowUpBlack.png')} style={{ width: 20, height: 20 }} />}
                            </View>

                        </TouchableOpacity>
                        {showContent && <ImageBackground source={require('../../assets/Images/PrizePoolBg.png')} imageStyle={{ resizeMode: 'cover', opacity: 0.8 }} style={{ margin: 5, padding: 5, width: '90%', alignSelf: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 16, textAlign: 'left' }}>1-) There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                        </ImageBackground>}
                        <View style={{
                            borderStyle: 'dotted',
                            borderWidth: 1,
                            borderRadius: 1,
                            borderColor: '#3A3A3A4D',
                            marginTop: 5


                        }} />
                    </View>
                    <View style={{ width: '95%', alignSelf: 'center', minHeight: 55, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={toggleContentTwo} style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Privacy and Policy</Text>
                            <View>
                                {showContentTwo == true ?
                                    <Image source={require('../../assets/Iocns/ArrowDownBlack.png')} style={{ width: 20, height: 20 }} />
                                    :
                                    <Image source={require('../../assets/Iocns/ArrowUpBlack.png')} style={{ width: 20, height: 20 }} />}
                            </View>

                        </TouchableOpacity>
                        {showContentTwo && <ImageBackground source={require('../../assets/Images/PrizePoolBg.png')} imageStyle={{ resizeMode: 'cover', opacity: 0.8 }} style={{ margin: 5, padding: 5, width: '90%', alignSelf: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 16, textAlign: 'left' }}>1-) There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                        </ImageBackground>}
                        <View style={{
                            borderStyle: 'dotted',
                            borderWidth: 1,
                            borderRadius: 1,
                            borderColor: '#3A3A3A4D',
                            marginTop: 5


                        }} />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default PrivacyAndPolicy
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 3,
        margin: 3
    },
    scrollViewContent: {
        marginTop: 10
    },


})