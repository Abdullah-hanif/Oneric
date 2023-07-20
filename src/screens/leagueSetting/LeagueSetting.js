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
const LeagueSetting = ({ navigation }) => {
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
                    sourceRSleftIconFirst={require('../../assets/Iocns/PTS.png')}
                    styleRLFIMG={{ right: 5 }}
                    sourceRSleftIcon={require('../../assets/Iocns/WalletHeader.png')}
                    TextRSrighttext={'20'}
                    // sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
                    sourceLeftOnPress={() => navigation.goBack()}
                />
                <View style={{ marginTop: 5, padding: 5, margin: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', left: 10 }}>
                        <Text style={{ fontWeight: '400', fontSize: 32 }}>League <Text style={{ color: '#7D7D7D', fontWeight: '200' }}>(Sam heading)</Text></Text>
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
                    <View style={{ marginTop: 15 }}>
                        {dataTwo.map((item) => (
                            <View key={item.id} style={{ width: '100%', height: 39, alignItems: 'center', justifyContent: 'center', padding: 6, margin: 10, borderRadius: 30, alignSelf: "center" }}>
                                <ImageBackground source={require('../../assets/Images/CardBgImg.png')} style={{ justifyContent: 'center', height: 39, width: '100%', borderRadius: 30 }} imageStyle={{borderRadius:35}}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('DetailsVerify')} style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 5, margin: 5 }}>
                                        <View style={{ flexDirection: 'row', gap: 5, left: 5 }}>
                                            <Text style={{ color: '#fff', fontWeight: '400' }}>{item.title}</Text>
                                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>- {item.titlePoint}</Text>
                                        </View>
                                        <Image source={require('../../assets/Iocns/ArrowUp.png')} style={{ right: 5, width: 13, height: 7 }} />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>))}
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default LeagueSetting;

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