import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParam } from '../navigation/StackNavigator';

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomNavigator'); //BottomNavigator
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
     
        <Image
          source={require('../../assets/Icons/couple.png')}
          style={styles.image}
        />
        <View style={styles.secContainer}>
          <Text style={styles.text1}>
            Shaadi <Text style={styles.text2}>Meetup</Text>
          </Text>
        </View>
      
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  secContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#000080',
    fontSize: 35,
    fontFamily: 'Georgia',
    elevation: 5,
    shadowColor: '#FF1493',
    shadowOpacity: 0.5
  },
  text2: {
    color: '#FF1493',
    fontSize: 35,
    elevation: 5,
    shadowColor: '#000080',
    shadowOpacity: 0.5
  }

})
export default Splash;

