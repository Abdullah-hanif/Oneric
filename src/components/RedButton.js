import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RedButton = ({ iconImg, text ,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', width: 144, height: 45, backgroundColor: 'red', borderRadius: 25, alignItems: "center", paddingLeft: 10 }}>

            <Image source={iconImg} style={{ height: 19, width: 26 }} />
            <Text style={{ color: '#FFFF', left: 10, fontWeight: '400', fontSize: 16, letterSpacing: 7 }}>{text}</Text>

        </TouchableOpacity>
    )
}

export default RedButton

const styles = StyleSheet.create({})