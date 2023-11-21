import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';

const AddPayment = ({ handleClose }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleSubmit = () => {
    console.log('clicked submit');
    handleClose(0.5);
  };

  const renderReminder = () => {
    // render selector similar to iOS time selector
    Alert.alert('Reminder Set', 'Kindly choose interval below', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  useEffect(() => {
    if (isEnabled) {
      renderReminder();
    }
  }, [isEnabled]);
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
        <Text style={styles.inputTitle}>Remind me</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#6C63FF' }}
          thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {/* <Text style={styles.inputTitle}>Description</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholderTextColor="#F3F7FC"
        /> */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPayment;
