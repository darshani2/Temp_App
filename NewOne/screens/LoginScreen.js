import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { auth } from 'expo-firebase-auth'; // Import auth from Expo's firebase library

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      // After successful login, navigate to the next screen or perform additional actions.
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
