import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';

const FullScreenModal = ({ isVisible, onClose, content }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={onClose} style={{ marginRight: 30, flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
            <Text style={styles.closeButtonText}>Close</Text>
            <Image source={require('../assets/Iocns/Cross.png')} style={{ left: 10 }} />
          </TouchableOpacity>
         
        </View>
        <View style={{ height: '100%', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {content}
        </View>


      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000',

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
});

export default FullScreenModal;
