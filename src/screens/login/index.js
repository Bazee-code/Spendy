import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

const LoginScreen = () => {
  const handleLogin = () => {
    // navigate to home
  };
  return (
    <>
      <View style={styles.container}>
        <FontAwesome5 name="piggy-bank" size={50} color="#6C63FF" />
        <Text style={styles.title}>WELCOME TO SPENDY!</Text>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput style={styles.input} placeholderTextColor="#F3F7FC" />
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput style={styles.input} placeholderTextColor="#F3F7FC" />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginScreen;
