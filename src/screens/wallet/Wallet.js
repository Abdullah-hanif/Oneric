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

const Wallet = ({ navigation }) => {
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
                        <Text style={{ fontWeight: '700', fontSize: 32 }}>Wallet</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#3A3A3A ',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 10
                        }}
                    />

                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', height: 112, backgroundColor: '#000000', alignSelf: 'center', marginTop: 25, borderRadius: 10, elevation: 3 }}>
                        <ImageBackground source={require('../../assets/Images/walletBgImage.png')} style={{}} imageStyle={{ alignSelf: 'flex-end', width: '70%', height: '100%', left: '3%' }}>
                            <Text style={{ fontWeight: '200', fontSize: 20, color: '#8E8E8E', letterSpacing: 6, alignSelf: 'center' }}>Balance</Text>
                            <Text style={{ fontWeight: '700', fontSize: 48, color: '#5AC73D' }}>18,400</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                        <TouchableOpacity style={{ elevation: 3, height: 44, width: 160, backgroundColor: '#278C0C', alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#ffff', letterSpacing: 4 }}>WITHDRAW</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('TeamOne')} style={{ elevation: 3, height: 41, width: 99, backgroundColor: '#483DE2', alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                            <Text style={{ fontWeight: '400', fontSize: 12, color: '#ffff', letterSpacing: 4 }}>TOP UP</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={true} style={{ marginTop: '3%', padding: 5, margin: 5, borderRadius: 10, width: '95%', height: 175, backgroundColor: '#C9C9C9', alignSelf: 'center' }}>
                        <View style={{ margin: 6, padding: 5, height: 40, borderBottomColor: '#FFFFFF', borderStyle: 'dotted', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#000000' }}>1. Total Cash Deposite</Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#483DE2' }}>10<Text>₹</Text></Text>
                        </View>
                        <View style={{ margin: 6, padding: 5, height: 40, borderBottomColor: '#FFFFFF', borderStyle: 'dotted', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#000000' }}>2. Total Winnings</Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#483DE2' }}>10<Text>₹</Text></Text>
                        </View>
                        <View style={{ margin: 6, padding: 5, height: 40, borderBottomColor: '#FFFFFF', borderStyle: 'dotted', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#000000' }}>3. Cashback</Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#483DE2' }}>10<Text>₹</Text></Text>
                        </View>
                        <View style={{ margin: 6, padding: 5, height: 40, borderBottomColor: '#FFFFFF', borderStyle: 'dotted', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#000000' }}>4. Withdrawls</Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#483DE2' }}>10<Text>₹</Text></Text>
                        </View>
                        <View style={{ margin: 6, padding: 5, bottom: 5, height: 40, borderBottomColor: '#FFFFFF', borderStyle: 'dotted', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#000000' }}>5           . Rewards</Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#483DE2' }}>10<Text>₹</Text></Text>
                        </View>
                    </ScrollView>
                    <View style={{ padding: 10, margin: 5, alignSelf: 'center' }}>
                        <Text style={{ fontWeight: '400', fontSize: 11, textAlign: 'left' }}>You can use <Text style={{ fontWeight: '700' }}>100%</Text> of cashback bonus in a Match. Bonus cannot be used in a private contest</Text>
                    </View>
                    <View style={{ padding: 10, margin: 5 }}>
                        <Text style={{ fontWeight: '700', fontSize: 16 }}>Passbook</Text>

                        {data?.map((item) =>
                            <View style={{ margin: 3 }} key={item.id}>
                                <WalletPassbook
                                    BGimage={item?.amountValuePositive == true ? null : item?.backgroundImage?.activeImg}
                                    idNumber={item.WalletID}
                                    contestJoin={item.amountValuePositive ? 'Topp' : item.contestJoin}
                                    contestDate={item.contestDate}
                                    contestAmount={item.contestAmount}
                                    amountValuePositive={item?.amountValuePositive}
                                />
                            </View>
                        )}

                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default Wallet;

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