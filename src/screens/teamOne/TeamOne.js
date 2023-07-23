import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';
import HorizontalTopList from '../../components/HorizontalTopList';

// for dummy data
const data = [
    { id: '1', title: 'League', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '2', title: 'One Day International', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '3', title: 'Test matches', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '4', title: 'IPL', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '5', title: 'World cup', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    // Add more items here if needed
];
const dataTwo = [
    { id: '1', title: 'League', titlePoint: 'Batting Points', activeIcon: { activeImg: require('../../assets/Iocns/ArrowUp.png'), nonActiveImg: require('../../assets/Iocns/ArrowDown.png') } },
    { id: '2', title: 'League', titlePoint: 'Batting Points', titleImage: { activeImg: require('../../assets/Iocns/ArrowUp.png'), nonActiveImg: require('../../assets/Iocns/ArrowDown.png') } },
    { id: '3', title: 'League', titlePoint: 'Other Points', titleImage: { activeImg: require('../../assets/Iocns/ArrowUp.png'), nonActiveImg: require('../../assets/Iocns/ArrowDown.png') } },
    { id: '4', title: 'League', titlePoint: 'Other Points', titleImage: { activeImg: require('../../assets/Iocns/ArrowUp.png'), nonActiveImg: require('../../assets/Iocns/ArrowDown.png') } },
    // Add more items here if needed
];
const TeamOne = ({ navigation }) => {
    const [activeItemId, setActiveItemId] = useState(null);
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
                    // sourceRSleftIconFirst={require('../../assets/Iocns/PTS.png')}
                    styleRLFIMG={{ right: 5 }}
                    sourceRSleftIcon={require('../../assets/Iocns/PTS.png')}
                    styleRLIMG={{ left: 10 }}
                    // sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
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
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.scrollViewContent}
                        showsHorizontalScrollIndicator={false}
                    >
                        {data.map((item) => (
                            <HorizontalTopList key={item.id} item={item} activeId={activeItemId} onPress={setActiveItemId} />
                        ))}
                    </ScrollView>
                    <View style={{ alignSelf:'center',width: '95%', height: 223, marginTop: 50, overflow: 'visible' }}>
                        <ImageBackground source={require('../../assets/Images/GroundImageOne.png')} style={{ overflow: 'visible', height: 193, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} imageStyle={{ borderRadius: 10 }}>
                            <View style={{ borderWidth: 0.8, elevation: 3, padding: 15, justifyContent: 'center', opacity: 0.8, borderRadius: 30, backgroundColor: '#FFFFFF', width: '95%', alignSelf: 'center', height: 32, bottom: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: '800', fontSize: 12 }}>My Team 1</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                        <TouchableOpacity style={{ elevation: 4, width: 23, height: 23, backgroundColor: '#000000', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../../assets/Iocns/EditIcon.png')} style={{ width: 13, height: 13 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ elevation: 4, width: 23, height: 23, backgroundColor: '#000000', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../../assets/Iocns/CopyIcon.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#CE1124', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>C</Text>
                                    </View>
                                    <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#CE1124', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                        <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>J Root</Text>
                                    </View>
                                    <Image source={require('../../assets/Images/CaptianUSerImg.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                </View>
                                <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                    </View>
                                    <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                        <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                    </View>
                                    <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                </View>
                            </View>
                            <View style={{ elevation: 3, justifyContent: 'center', opacity: 0.8, borderRadius: 30, width: '95%', height: 32, top: 15, backgroundColor: '#5AC73D', alignSelf: 'center' }}>
                                <View style={{ flexDirection: 'row', zIndex: 99999, justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: '600', fontSize: 12 }}>WK <Text style={{ color: 'white' }}>(0)</Text></Text>
                                    <Text style={{ fontWeight: '600', fontSize: 12 }}>BAT <Text style={{ color: 'white' }}>(8)</Text></Text>
                                    <Text style={{ fontWeight: '600', fontSize: 12 }}>AR <Text style={{ color: 'white' }}>(1)</Text></Text>
                                    <Text style={{ fontWeight: '600', fontSize: 12 }}>BOWL <Text style={{ color: 'white' }}>(3)</Text></Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginTop: '35%'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 258,
                                height: 45,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#278C0C', // Change this to your desired button color
                                borderRadius: 53,
                                elevation: 5
                            }}
                            onPress={() => {
                                navigation.navigate('TeamTwo')
                            }}
                        >
                            <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 12, fontWeight: '400', letterSpacing: 5 }}>
                                CREATE TEAM+
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default TeamOne;

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