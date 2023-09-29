import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UserData {
  fullName: string;
  age: number;
  // add any other properties as needed
}

const UserComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({ fullName: '', age: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://shaadi-meetup-new.onrender.com/api/profile/getProfileByUserId/:userId'
        );
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.text}>Name: {userData.fullName}</Text>
      <Text style={styles.text}>Age: {userData.age}</Text>
      {/* Display other user information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default UserComponent;
