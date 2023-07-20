import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';

// for dummy data

const dataTwo = [
    { id: '1', heading: 'Phone Number', title: '7231344254', isVerify: true, activeIcon: { activeImg: require('../../assets/Iocns/ArrowUp.png'), nonActiveImg: require('../../assets/Iocns/ArrowDown.png') } },
    { id: '2', heading: 'Bank Account', title: 'KYC', isVerify: true, titlePoint: 'Batting Points', titleImage: { activeImg: require('../../assets/Iocns/ArrowUp.png'), nonActiveImg: require('../../assets/Iocns/ArrowDown.png') } },
    { id: '3', heading: 'PAN Card', title: 'For Tax Purpose', isVerify: false, titlePoint: 'Other Points', titleImage: { activeImg: require('../../assets/Iocns/ArrowUp.png'), nonActiveImg: require('../../assets/Iocns/ArrowDown.png') } },
    { id: '4', heading: 'Bank Account', title: 'For Quick Widthdraws', isVerify: false, titlePoint: 'Other Points', titleImage: { activeImg: require('../../assets/Iocns/ArrowUp.png'), nonActiveImg: require('../../assets/Iocns/ArrowDown.png') } },
    // Add more items here if needed
];
const DetailsVerify = ({ navigation }) => {
    const [activeItemId, setActiveItemId] = useState(null);
    return (
        <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
            <View style={{ position: 'absolute', height: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Image source={require('../../assets/Images/BottomLeftbackground.png')} style={{ height: 330, width: 330 }} />
            </View>
            <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', left: 10 }}>
                <Image source={require('../../assets/Images/TopRightBackground.png')} />
            </View>
            <ScrollView style={styles.main} >
                <GlobalHeader
                    sourceLeft={require('../../assets/Iocns/Back.png')}
                    styleLeft={{ width: 25, height: 20 }}
                    sourceRight={require('../../assets/Images/OnericLogo.png')}
                    styleRight={{ width: 49, height: 47, left: 20 }}
                    // sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
                    sourceLeftOnPress={() => navigation.goBack()}
                />
                <View style={{ marginTop: 0, padding: 5, margin: 5 }}>
                    <ImageBackground source={require('../../assets/Images/BgDetailsVerify.png')} style={{ width: '100%', height: '80%' }}>
                        <View style={{ left: 10 }}>
                            <Text style={{ fontWeight: '700', fontSize: 32 }}>Verify to Withdraw</Text>
                            <Text style={{ fontWeight: '700', fontSize: 14 }}>In <Text style={{ color: '#FF0F0F' }}>2 Mins</Text></Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#3A3A3A',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                marginTop: 10
                            }}
                        />

                        <View style={{ marginTop: '50%' }}>
                            {dataTwo.map((item) => (
                                <View key={item.id} style={{ justifyContent: 'center', height: 39, width: '100%', borderRadius: 30, padding: 6, margin: 15, borderRadius: 30, alignSelf: "center" }}>
                                    <View style={{ paddingLeft: 10, marginTop: 0, top: '10%', margin: 5 }}>
                                        <Text style={{ fontSize: 12, fontWeight: '400' }}>{item.heading}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailsVerify')} style={{ backgroundColor: item.heading === 'Phone Number' && '#000000', borderWidth: 1, height: 39, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 5, margin: 5, borderRadius: 30 }}>
                                        <View style={{ flexDirection: 'row', gap: 5, marginLeft: 10 }}>
                                            <Text style={{ letterSpacing: 1, color: item.heading === 'Phone Number' ? '#FFFF' : '#000000', fontWeight: '400', fontSize: 12 }}>{item.title}</Text>
                                        </View>
                                        {item?.isVerify == true ?
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                                                <Image source={require('../../assets/Iocns/VerifyTick.png')} style={{ right: 5, width: 22, height: 22 }} />
                                                <Text style={{ fontSize: 11, fontWeight: '700', color: '#5AC73D' }}>VERIFIED</Text>
                                            </View>
                                            :
                                            <TouchableOpacity style={{ width: 74, height: 26, backgroundColor: '#FF0F0F', borderRadius: 30, alignItems: 'center', justifyContent: 'center', right: 5, elevation: 3 }}>
                                                <Text style={{ fontSize: 12, fontWeight: '700', color: '#F0F4F6' }}>Verify</Text>
                                            </TouchableOpacity>
                                        }
                                    </TouchableOpacity>

                                </View>))}
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default DetailsVerify;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 3,
        margin: 3
    },
    scrollViewContent: {
        marginTop: 10
    }
})