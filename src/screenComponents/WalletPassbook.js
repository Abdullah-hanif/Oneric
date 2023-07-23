import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const WalletPassbook = ({ amountValuePositive, ...props }) => {
    return (
        <View style={{ borderWidth: amountValuePositive ? 1 : 0, borderColor: amountValuePositive ? '#8E8E8E' : null, width: '100%', height: 79, alignSelf: 'center', marginTop: 5, borderRadius: 10, }}>
            <ImageBackground source={props.BGimage} style={{ height: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} imageStyle={{ borderRadius: 10 }}>
                {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}> */}
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 15, color: '#000000' }}><Text style={{ fontWeight: '400', fontSize: 15, color: '#7D7D7D' }}>ID-</Text>{props.idNumber}</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Image source={amountValuePositive ? require('../assets/Iocns/ContestJoinWalletBlue.png') : require('../assets/Iocns/ContestJoinWallet.png')} style={{ width: 13, height: 12 }} />
                        <Text style={{ textDecorationLine: "underline", color: amountValuePositive ? '#483DE2' : '#278C0C', fontSize: 12, fontWeight: 400, }}>{props.contestJoin}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingRight: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center', top: 5 }}>
                    <Text style={{ fontWeight: '400', fontSize: 11, color: '#000000' }}>{props.contestDate}</Text>
                    <Text style={{ fontWeight: '700', fontSize: 27, color: amountValuePositive ? '#483DE2' : '#278C0C' }}>{props.contestAmount} ₹</Text>
                </View>
                {/* </View> */}
            </ImageBackground>
        </View>
    )
}

export default WalletPassbook

const styles = StyleSheet.create({})