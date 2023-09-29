import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = async () => {
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Invalid email format');
        isValid = false;
      } else {
        setEmailError('');
      }
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError(
          'Password must contain at least 8 characters, including at least one letter and one number',
        );
        isValid = false;
      } else {
        setPasswordError('');
      }
    }

    if (isValid) {
      try {
        const response = await fetch(
          'https://shaadi-meetup-new.onrender.com/api/users/register',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          },
        );
        const data = await response.json();
        if (response.status === 200) {
          setIsFormValid(true);
          setName('');
          setEmail('');
          setPassword('');
          Alert.alert('Register Successfully');
        } else {
          Alert.alert('Email already exists, Try with another one');
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        error={Boolean(nameError)}
        style={[styles.input]}
      />
      {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        error={Boolean(emailError)}
        style={[styles.input]}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        error={Boolean(passwordError)}
        style={[styles.input]}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
  },

  error: {
    color: 'red',
  },
  button: {
    marginTop: 20,
  },
});

export default RegisterForm;
