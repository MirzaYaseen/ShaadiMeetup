import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../navigation/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://shaadi-meetup-new.onrender.com/api/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );
      const data = await response.json();
      console.log(data);
      await AsyncStorage.setItem('token', data.token);
      // navigation.navigate('BottomNavigator');
      navigation.navigate('UserPostAds');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(password, email);
  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 10,
          marginVertical: 10,
        }}
      />
      <Text>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 10,
          marginVertical: 10,
        }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
