import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const UpCommingMatchesCard = ({ ...props }) => {
    return (
        <TouchableOpacity style={{ padding: 8, width: 160, maxHeight: 200,minHeight:180, backgroundColor: '#1D1E22', borderRadius: 8 }} onPress={props.onPress}>
            <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                <Image source={require('../assets/Iocns/MegaSticker.png')} style={{resizeMode:'contain', position: 'relative', width: 48, height: 48 }} />
            </View>
            <Text style={{ color: '#FFFFFF', fontWeight: '200', fontSize: 14, }}>{props.matchName}</Text>
            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14, }}>   {props.teamOne} vs {props.teamTwo}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={props.flagFirstTeam} style={{ width: 32, height: 32 ,resizeMode:'contain',borderRadius:100}} />
                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>{props.teamsOneName}</Text>
                </View>
                <Image source={require('../assets/Iocns/VSwhite.png')} style={{ resizeMode: 'contain', width: 38, height: 37 }} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={props.flagSecondTeam} style={{ width: 32, height: 32,resizeMode:'contain',borderRadius:100 }} />
                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>{props.teamsTwoName}</Text>
                </View>

            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ color: '#FF0F0F', fontWeight: '700', fontSize: 14 }}>{props.hour} <Text style={{ fontSize: 14, fontWeight: '400', color: '#FFFFFF' }}>{props.min}</Text></Text>
            </View>
            <View
                style={{
                    borderBottomColor: '#FFFFFF',
                    borderBottomWidth: 1,
                    marginTop: 5
                }}
            />
            <Text style={{ fontWeight: '400', fontSize: 14, color: '#ffff', top: 5, textAlign: 'right', right: 5 }}>₹ {props.batPrice}</Text>
        </TouchableOpacity>
    )
}

export default UpCommingMatchesCard

const styles = StyleSheet.create({})