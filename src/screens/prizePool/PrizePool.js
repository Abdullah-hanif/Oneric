import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';
import HorizontalTopList from '../../components/HorizontalTopList';
import WalletPassbook from '../../screenComponents/WalletPassbook';

// for dummy data
const data = [
    { id: '1', WalletID: 'a110fgc5', contestJoin: 'Contest join', contestDate: 'Jun 15, 07:10 PM', contestAmount: '-10', title: 'League', amountValuePositive: false, backgroundImage: { activeImg: require('../../assets/Images/WalletShadow.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '2', WalletID: 'a110fgc5', contestJoin: 'Contest join', contestDate: 'Jun 15, 07:10 PM', contestAmount: '+20', title: 'League', amountValuePositive: true, backgroundImage: { activeImg: require('../../assets/Images/WalletShadow.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '3', WalletID: 'a110fgc5', contestJoin: 'Contest join', contestDate: 'Jun 15, 07:10 PM', contestAmount: '-10', title: 'League', amountValuePositive: false, backgroundImage: { activeImg: require('../../assets/Images/WalletShadow.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },

    // Add more items here if needed
];

const PrizePool = ({ navigation }) => {
    const [activeItemId, setActiveItemId] = useState(null);
    return (
        <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
            {/* <View style={{ position: 'absolute', height: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Image source={require('../../assets/Images/BottomLeftbackground.png')} style={{ height: 330, width: 330 }} />
            </View> */}
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
                <View style={{ marginTop: 5, padding: 5, margin: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', left: 10 }}>
                        <Text style={{ fontWeight: '400', fontSize: 32 }}>ENG <Text style={{ color: '#7D7D7D' }}>vs</Text> AUS</Text>
                        <View style={{ flexDirection: 'row', left: 10 }}>
                            <Image source={require('../../assets/Images/AUSflag.png')} />
                            <Image source={require('../../assets/Images/ENGlflag.png')} style={{ left: 10 }} />
                        </View>

                    </View>
                    <View
                        style={{
                            borderBottomColor: '#3A3A3A ',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 10
                        }}
                    />
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: 120, height: 40, backgroundColor: '#5AC73D', borderBottomLeftRadius: 16, alignSelf: 'flex-end' }}>
                        <Image source={require('../../assets/Iocns/BlackBadge.png')} style={{ resizeMode: 'contain', width: 18, height: 21, left: 10 }} />
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, fontWeight: '400', color: '#FFFFFF', }}>Contest by:</Text>
                            <Text style={{ fontSize: 15, fontWeight: '700', color: '#000000', right: 10 }}> SLEIN10P</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', height: 112, backgroundColor: '#000000', alignSelf: 'center', marginTop: 25, borderRadius: 10, elevation: 3 }}>
                        <ImageBackground source={require('../../assets/Images/walletBgImage.png')} style={{}} imageStyle={{ alignSelf: 'flex-end', width: '70%', height: '100%', left: '3%' }}>
                            <Text style={{ fontWeight: '200', fontSize: 20, color: '#8E8E8E', letterSpacing: 6, alignSelf: 'center' }}>Balance</Text>
                            <Text style={{ fontWeight: '700', fontSize: 48, color: '#5AC73D' }}>18,400</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>
                        <View style={{ width: 69, height: 44, borderWidth: 1, borderRadius: 53, borderColor: '#797979', alignItems: 'center', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: '#797979' }}>₹ 20</Text>
                        </View>
                        <View style={{ width: 69, height: 44, borderWidth: 1, borderRadius: 53, borderColor: '#797979', alignItems: 'center', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: '#797979' }}>₹ 20</Text>
                        </View>
                        <View style={{ width: 69, height: 44, borderWidth: 1, borderRadius: 53, borderColor: '#797979', alignItems: 'center', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: '#797979' }}>₹ 20</Text>
                        </View>
                    </View>
                    <View style={{
                        borderStyle: 'dotted',
                        borderWidth: 1,
                        borderRadius: 1,
                        borderColor: '#3A3A3A4D',
                        marginTop: '5%'

                    }} />
                    <ImageBackground source={require('../../assets/Images/PrizePoolBg.png')} style={{}} imageStyle={{ resizeMode: 'cover', opacity: 0.7 }}>
                        <View style={{ marginTop: '5%', alignSelf: "center", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 131, height: 47, borderWidth: 2, borderRadius: 53, borderColor: '#FF0F0F' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#FF0F0F', letterSpacing: 2 }}>SPOTS</Text>
                            <Text style={{ fontWeight: '800', fontSize: 30, color: '#FF0F0F', left: 5 }}>2</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', alignSelf: 'center', marginTop: '8%' }}>
                            <Image source={require('../../assets/Images/BigTrophy.png')} style={{ width: 139, height: 139 }} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: '400', fontSize: 20 }}>Prize Pool</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: '700', fontSize: 88 }}>19</Text>
                                    <Image source={require('../../assets/Iocns/InrLogo.png')} style={{ height: 40, width: 28, top: 10 }} />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileSetupTwo')} style={{ marginTop: '10%', padding: 10, alignItems: 'center', flexDirection: 'row', width: 199, height: 45, backgroundColor: '#FF0F0F', borderRadius: 53, alignSelf: 'center' }}>
                            <Image source={require('../../assets/Iocns/RightArrow.png')} style={{ width: 26, height: 19 }} />
                            <Text style={{ fontWeight: '400', fontSize: 16, color: '#FFFFFF', left: 10, letterSpacing: 5 }}>CONTINUE</Text>

                        </TouchableOpacity>
                    </ImageBackground>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default PrizePool;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0
    },
    scrollViewContent: {
        marginTop: 10
    }
})