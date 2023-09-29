import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const UserData = () => {
  async function handleUser() {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(
      'https://shaadi-meetup-new.onrender.com/api/users/getUser',
      {headers: {Authorization: token}},
    );
    console.log(response);
  }

  handleUser();

  return (
    <View>
      <Text>userData</Text>
    </View>
  );
};

export default UserData;
