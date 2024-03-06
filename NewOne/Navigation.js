// Navigation.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Button, View } from 'react-native';
import Home from './Home';

const Navigation = () => {
  const nav = useNavigation();
  const drawerStatus = useDrawerStatus();
  console.log(drawerStatus);

  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Button title='Home' onPress={() => nav.navigate('Home')} />
        <Button title='Settings' onPress={() => nav.navigate('Settings')} />
      </View>
      <Home navigation={nav} />
      <StatusBar style="auto" />
    </>
  );
};

export default Navigation;
