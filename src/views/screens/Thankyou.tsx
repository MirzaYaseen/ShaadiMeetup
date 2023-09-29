import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ThankYouModalProps {
  visible: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const handleClose = () => {
    onClose();
    // navigation.navigate('BottomNavigator');
  };

  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.text}>Thank you!</Text>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Click me!</Text>
      </TouchableOpacity>
      <ThankYouModal visible={modalVisible} onClose={handleClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  close: {
    fontSize: 16,
    color: '#2196F3',
    alignSelf: 'flex-end',
  },
});

export default App;
