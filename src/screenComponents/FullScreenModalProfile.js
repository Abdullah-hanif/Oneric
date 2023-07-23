import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const FullScreenModalProfile = ({ isVisible, onClose, content }) => {
  const nav = useNavigation();
  return (
    // <Image source={require('../assets/Iocns/BackIconWhite.png')}/>
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <ScrollView style={styles.modalOverlay}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, margin: 10, alignItems: 'center' }}>
          <TouchableOpacity onPress={onClose}>
            <Image source={require('../assets/Iocns/BackIconWhite.png')} style={{ width: 25, height: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Images/ProfileImage.png')} style={{ width: 65, height: 70 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', left: 15 }}>
          <Text style={{ fontWeight: '200', fontSize: 32, color: '#FFFFFF' }}>Anveet <Text style={{ color: '#5AC73D', fontWeight: '700' }}>Singh</Text></Text>
        </View>
        <View
          style={{
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 10
          }}
        />
        <View style={{ padding: 10, margin: 10, height: '100%' }}>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '100%' }}>
            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 16 }}>1. Settings</Text>
            <Image source={require('../assets/Iocns/Settings.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '100%' }}>
            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 16 }}>2. Wallet</Text>
            <Image source={require('../assets/Iocns/WalletGreen.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '100%' }}>
            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 16 }}>3. Recent Earning</Text>
            <Image source={require('../assets/Iocns/RecentEarn.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '100%' }}>
            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 16 }}>4. Terms & Conditions</Text>
            <Image source={require('../assets/Iocns/TermAndCond.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '100%' }}>
            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 16 }}>5. Point System</Text>
            <Image source={require('../assets/Iocns/PointSystem.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '100%' }}>
            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 16 }}>6. Refer to Earn</Text>
            <Image source={require('../assets/Iocns/RefAndEarn.png')} style={{ height: 15, width: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '100%' }}>
            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 16 }}>7. Responsible Play</Text>
            <Image source={require('../assets/Iocns/GreenBat.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '100%' }}>
            <Text style={{ color: '#fff', fontWeight: '400', fontSize: 16 }}>8. Contact Us</Text>
            <Image source={require('../assets/Iocns/ContactIs.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate('Wallet')} style={{ flexDirection: 'row', borderRadius: 25, width: '95%', height: 48, backgroundColor: 'red', justifyContent: 'space-between', alignSelf: 'center', marginTop: 60, padding: 10 }}>
            <Text style={{ fontWeight: '200', fontSize: 20, color: '#FFFFFF', left: 5 }}>Sign Out</Text>
            <Image source={require('../assets/Iocns/SignOut.png')} style={{ width: 26, height: 24, right: 5 }} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </Modal>
  )
}

export default FullScreenModalProfile

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 3,
    opacity: 0.9

  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    height: '80%',
    width: '80%',
    opacity: 3
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    top: 30,
    backgroundColor: 'red',


    width: '60%',
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
    paddingRight: 30
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 5

  },
})