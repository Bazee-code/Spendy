import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const AddPayment = ({ handleClose }) => {
  const handleSubmit = () => {
    console.log('clicked submit');
    handleClose(0.5);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Payment</Text>
      <View style={{ marginTop: 25 }}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput style={styles.input} placeholderTextColor="#F3F7FC" />
        <Text style={styles.inputTitle}>Amount</Text>
        <TextInput style={styles.input} placeholderTextColor="#F3F7FC" />
        <Text style={styles.inputTitle}>Category</Text>
        <TextInput style={styles.input} placeholderTextColor="#F3F7FC" />
        <Text style={styles.inputTitle}>Description</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholderTextColor="#F3F7FC"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPayment;
