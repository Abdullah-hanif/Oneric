import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { truncateString } from '../common/Utils'

const FutureMatchesCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ padding: 8, width: 236, height: 175, backgroundColor: '#012169', borderRadius: 8 }}>
            <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                <Image source={require('../assets/Iocns/MegaSticker.png')} style={{ zIndex: 9999, position: 'relative', width: 48, height: 48 }} />
            </View>
            <Text style={{ color: '#FFFFFF', fontWeight: '400', fontSize: 14, }}>{props.MatchName} | <Text style={{ fontWeight: '700', fontSize: 14 }}>{props.teamShortCode}</Text> </Text>
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
                    <Image source={props.flagAteam} style={{ width: 32, height: 32, borderRadius: 100 }} />
                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>{truncateString(props.teamOneName, 11)}</Text>
                </View>
                <Image source={require('../assets/Iocns/VSwhite.png')} style={{ resizeMode: 'contain', width: 38, height: 37 }} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={props.flagBteam} style={{ width: 32, height: 32, borderRadius: 100 }} />
                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>{truncateString(props.teamTwoName, 11)}</Text>
                </View>

            </View>
            <View style={{ marginTop: 10, alignSelf: 'center', alignItems: 'center', bottom: 5 }}>
                <Image source={require('../assets/Iocns/Timer.png')} style={{ resizeMode: 'contain', width: 16, height: 16, }} />
                <Text style={{ color: '#FFFF', fontWeight: '400', fontSize: 12, top: 5 }}>{props.remainingTime}</Text>
            </View>
            <View
                style={{
                    borderBottomColor: '#FFFFFF',
                    borderBottomWidth: 1,
                    marginTop: 10
                }}
            />
            {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: '1%' }}>
                <Text style={{ fontWeight: '700', fontSize: 14, color: '#ffff', }}>₹ {props.totalAmount}</Text>
                <Image source={require('../assets/Iocns/AlarmBell.png')} style={{ resizeMode: 'contain', width: 15, height: 16, left: 55 }} />
            </View>  */}
        </TouchableOpacity>
    )
}

export default FutureMatchesCard

const styles = StyleSheet.create({})