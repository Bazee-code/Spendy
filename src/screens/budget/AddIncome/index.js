import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AddIncome = ({ handleClose }) => {
  const handleSubmit = () => {
    console.log('clicked submit');
    handleClose(0.5);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Income</Text>
      <View style={{ marginTop: 25 }}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput style={styles.input} placeholderTextColor="#F3F7FC" />
        <Text style={styles.inputTitle}>Amount</Text>
        <TextInput style={styles.input} placeholderTextColor="#F3F7FC" />
        <Text style={styles.inputTitle}>Currency</Text>
        <TextInput style={styles.input} placeholderTextColor="#F3F7FC" />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#808080' }]}
          onPress={handleSubmit}
        >
          <MaterialCommunityIcons name="import" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Import from sms</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddIncome;
