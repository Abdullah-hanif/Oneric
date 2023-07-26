import React, { useEffect, useRef, useState } from 'react';
import { Button, Dimensions, ScrollView, Text } from 'react-native';
import { Image, ImageBackground, Keyboard, StyleSheet, View, TouchableOpacity } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';
import FullScreenModal from '../../components/FullScreenModal';
import FullScreenModalProfile from '../../screenComponents/FullScreenModalProfile';
import HorizontalTopList from '../../components/HorizontalTopList';

const data = [
    { id: '1', title: 'League', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '2', title: 'One Day International', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '3', title: 'Test matches', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '4', title: 'IPL', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '5', title: 'World cup', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    // Add more items here if needed
];
const Home = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeItemId, setActiveItemId] = useState(null);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    const [isModalVisibleProfile, setIsModalVisibleProfile] = useState(false);

    const toggleModalProfile = () => {
        setIsModalVisibleProfile(!isModalVisibleProfile);
    };

    const [currentPage, setCurrentPage] = useState(0);
    const sliderRef = useRef(null);

    const bannerData = [
        { id: 1, title: 'circket', image: require('../../assets/Images/BannerImage.png') },
        { id: 2, title: 'circket', image: require('../../assets/Images/BannerImage.png') },
        { id: 3, title: 'circket', image: require('../../assets/Images/BannerImage.png') },
        // Add more banner items as needed
    ];

    const handleSlideChange = (event) => {
        const slideWidth = event.nativeEvent.layoutMeasurement.width;
        const currentPageOffset = event.nativeEvent.contentOffset.x;
        const pageIndex = Math.floor(currentPageOffset / slideWidth);
        setCurrentPage(pageIndex);
    };

    return (

        <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
            <View style={styles.main} >
                
                <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', left: 10 }}>
                    <Image source={require('../../assets/Images/TopRightBackground.png')} />
                </View>
                <ScrollView style={{ padding: 5, margin: 5 }}>
                    <GlobalHeader
                        sourceLeft={require('../../assets/Images/OnericLogo.png')}
                        sourceRight={require('../../assets/Iocns/Dots.png')}
                        sourceRightOnPress={toggleModalProfile}
                        styleRight={{ width: 7, height: 28, left: 20 }}
                        sourceRSleftIcon={require('../../assets/Iocns/WalletHeader.png')}
                        TextRSrighttext={'20'}
                    // sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
                    />
                    <View style={{ flexDirection: 'column', left: 10 }}>
                        <Text style={{ fontWeight: '700', fontSize: 24 }}>Dashboard</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>where it all begin..</Text>
                    </View>

                    {/* Bnnanerrr */}
                    <Image source={require('../../assets/Images/ranvijay.png')} style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-end', width: 160, height: 160, bottom: 20, top: '14%' }} />
                    <View style={styles.container}>

                        <ScrollView
                            ref={sliderRef}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={handleSlideChange}
                        >
                            {bannerData.map((item, index) => (
                                <View key={item.id} style={styles.slideContainer}>
                                    {/* Replace the below Image component with your custom image component */}
                                    <Image source={item?.image} style={styles.slideImage} />
                                    {/* <Text>{item.title}</Text> */}
                                </View>
                            ))}
                        </ScrollView>
                        <View style={styles.dotsContainer}>
                            {bannerData.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        { backgroundColor: index === currentPage ? '#FFFFFF' : '#000000', width: index === currentPage ? 27 : 8 },
                                    ]}
                                />
                            ))}
                        </View>
                    </View>

                    {/* bannerrrrr */}

                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.scrollViewContent}
                        showsHorizontalScrollIndicator={false}
                    >
                        {data.map((item) => (
                            <HorizontalTopList key={item.id} item={item} activeId={activeItemId} onPress={setActiveItemId} />
                        ))}
                    </ScrollView>
                    <View style={{ alignItems: 'center', left: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Featured <Text style={{ color: '#FF0F0F', fontWeight: '600' }}>Matches</Text></Text>
                            <Image source={require('../../assets/Iocns/signals.png')} style={{ left: 10, width: 16, height: 11 }} />
                        </View>
                        <TouchableOpacity  onPress={() => navigation.navigate('Contest')}>
                            <Image source={require('../../assets/Iocns/RightSideArrow.png')} style={{ right: 20, width: 10, height: 16 }} />
                        </TouchableOpacity  >
                    </View>

                    <ScrollView horizontal scrollIndicatorInsets={false} style={{ padding: 1, margin: 1, marginTop: 10 }}>
                        <View style={{ padding: 8, width: 236, height: 175, backgroundColor: '#012169', borderRadius: 8 }}>
                            <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                                <Image source={require('../../assets/Iocns/MegaSticker.png')} style={{ zIndex: 9999, position: 'relative', width: 48, height: 48 }} />
                            </View>
                            <Text style={{ color: '#FFFFFF', fontWeight: '400', fontSize: 14, }}>TNPL | <Text style={{ fontWeight: '700', fontSize: 14 }}>RR</Text> vs <Text style={{ fontWeight: '700', fontSize: 14 }}>CSK</Text></Text>
                            <View style={{
                                borderStyle: 'dotted',
                                borderWidth: 1,
                                borderRadius: 1,
                                borderColor: '#FFFF',
                                top: 5
                            }}>
                            </View>
                            <View style={{ top: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>ENG</Text>
                                </View>
                                <Image source={require('../../assets/Iocns/VSwhite.png')} />
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>AUS</Text>
                                </View>

                            </View>
                            <View style={{ marginTop: 10, alignSelf: 'center', alignItems: 'center', bottom: 5 }}>
                                <Image source={require('../../assets/Iocns/Timer.png')} style={{ width: 16, height: 16, }} />
                                <Text style={{ color: '#FFFF', fontWeight: '400', fontSize: 12, top: 5 }}>4m 30s</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#FFFFFF',
                                    borderBottomWidth: 1,
                                    marginTop: 10
                                }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: '3%' }}>
                                <Text style={{ fontWeight: '700', fontSize: 14, color: '#ffff', }}>₹ 7.06 lakhs</Text>
                                <Image source={require('../../assets/Iocns/AlarmBell.png')} style={{ width: 15, height: 16, left: 55 }} />
                            </View>
                        </View>
                        <View style={{ left: 10, padding: 8, width: 236, height: 175, backgroundColor: '#012169', borderRadius: 8 }}>
                            <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                                <Image source={require('../../assets/Iocns/MegaSticker.png')} style={{ zIndex: 9999, position: 'relative', width: 48, height: 48 }} />
                            </View>
                            <Text style={{ color: '#FFFFFF', fontWeight: '400', fontSize: 14, }}>TNPL | <Text style={{ fontWeight: '700', fontSize: 14 }}>RR</Text> vs <Text style={{ fontWeight: '700', fontSize: 14 }}>CSK</Text></Text>
                            <View style={{
                                borderStyle: 'dotted',
                                borderWidth: 1,
                                borderRadius: 1,
                                borderColor: '#FFFF',
                                top: 5
                            }}>
                            </View>
                            <View style={{ top: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>ENG</Text>
                                </View>
                                <Image source={require('../../assets/Iocns/VSwhite.png')} />
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>AUS</Text>
                                </View>

                            </View>
                            <View style={{ marginTop: 10, alignSelf: 'center', alignItems: 'center', bottom: 5 }}>
                                <Image source={require('../../assets/Iocns/Timer.png')} style={{ width: 16, height: 16, }} />
                                <Text style={{ color: '#FFFF', fontWeight: '400', fontSize: 12, top: 5 }}>4m 30s</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#FFFFFF',
                                    borderBottomWidth: 1,
                                    marginTop: 10
                                }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: '3%' }}>
                                <Text style={{ fontWeight: '700', fontSize: 14, color: '#ffff', }}>₹ 7.06 lakhs</Text>
                                <Image source={require('../../assets/Iocns/AlarmBell.png')} style={{ width: 15, height: 16, left: 55 }} />
                            </View>
                        </View>
                    </ScrollView>

                    <View style={{ alignItems: 'center', left: 10, marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Upcomming <Text style={{ color: '#FF0F0F', fontWeight: '600' }}>Matches</Text></Text>
                            <Image source={require('../../assets/Iocns/signals.png')} style={{ left: 10, width: 16, height: 11 }} />
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('UpCommingMatches')}>
                            <Image source={require('../../assets/Iocns/RightSideArrow.png')} style={{ right: 20, width: 10, height: 16 }} />
                        </TouchableOpacity  >
                    </View>

                    {/* cards upcommings*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                        <View style={{ padding: 8, width: 173, height: 183, backgroundColor: '#1D1E22', borderRadius: 8 }}>
                            <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                                <Image source={require('../../assets/Iocns/MegaSticker.png')} style={{ position: 'relative', width: 48, height: 48 }} />
                            </View>
                            <Text style={{ color: '#FFFFFF', fontWeight: '200', fontSize: 14, }}>The Ashes - 2023</Text>
                            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14, }}>ENG vs AUS</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>ENG</Text>
                                </View>
                                <Image source={require('../../assets/Iocns/VSwhite.png')} />
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>AUS</Text>
                                </View>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: '#FF0F0F', fontWeight: '700', fontSize: 14 }}>20h <Text style={{ fontSize: 14, fontWeight: '400', color: '#FFFFFF' }}>19m</Text></Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#FFFFFF',
                                    borderBottomWidth: 1,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#ffff', top: 5, textAlign: 'right', right: 5 }}>₹ 7.06 lakhs</Text>
                        </View>
                        <View style={{ padding: 8, width: 173, height: 183, backgroundColor: '#1D1E22', borderRadius: 8 }}>
                            <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                                <Image source={require('../../assets/Iocns/MegaSticker.png')} style={{ position: 'relative', width: 48, height: 48 }} />
                            </View>
                            <Text style={{ color: '#FFFFFF', fontWeight: '200', fontSize: 14, }}>The Ashes - 2023</Text>
                            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14, }}>ENG vs AUS</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>ENG</Text>
                                </View>
                                <Image source={require('../../assets/Iocns/VSwhite.png')} />
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>AUS</Text>
                                </View>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: '#FF0F0F', fontWeight: '700', fontSize: 14 }}>20h <Text style={{ fontSize: 14, fontWeight: '400', color: '#FFFFFF' }}>19m</Text></Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#FFFFFF',
                                    borderBottomWidth: 1,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#ffff', top: 5, textAlign: 'right', right: 5 }}>₹ 7.06 lakhs</Text>
                        </View>
                    </View>
                    {/* cards upcommings*/}

                    <View style={{ marginTop: 10,bottom:5 }}>
                        <TouchableOpacity style={styles.openButton} onPress={toggleModal}>
                            <Text style={styles.openButtonText}>Open Modal</Text>
                        </TouchableOpacity>

                        <FullScreenModal isVisible={isModalVisible} onClose={toggleModal} content={
                            <Image source={require('../../assets/Images/GiftImage.png')} style={{ width: 300, height: 450 }} />
                        } />
                        <FullScreenModalProfile isVisible={isModalVisibleProfile} onClose={toggleModalProfile} />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>


    )
}

export default Home;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    scrollViewContent: {
        marginTop: '5%'
    },
    container: {
        width: '95%',
        marginTop: 20,
        height: 108,
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: 'red'
    },
    slideContainer: {
        width: windowWidth * 0.9,
        height: 200,

    },
    slideImage: {
        width: 448,
        height: 108,
        resizeMode: 'cover',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 8,
        left: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },


})