import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Routes from '../../navigation/Routes';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleLogin = (data) => {
    // navigation.replace(Routes.HOME_SCREEN);
    console.log('formData', data);
  };

  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { control, handleSubmit } = useForm();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }} />
      <View style={styles.container}>
        <FontAwesome5 name="piggy-bank" size={50} color="#6C63FF" />
        <Text style={styles.title}>WELCOME TO SPENDY!</Text>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.inputTitle}>Email</Text>
          <Controller
            control={control}
            name="phone_email"
            rules={{
              required: 'Email is required',
              pattern: { value: EMAIL_REGEX, message: 'Invalid email address' },
            }}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[
                    styles.input,
                    error
                      ? { borderBottomColor: 'red' }
                      : { borderBottomColor: '#667085' },
                  ]}
                  placeholderTextColor="#F3F7FC"
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  autoFocus={true}
                  autoCapitalize="none"
                />
                {error ? (
                  <View>
                    <Text style={styles.errorText}>{error.message}</Text>
                  </View>
                ) : (
                  <View style={{ marginBottom: 30 }} />
                )}
              </>
            )}
          />

          <Text style={styles.inputTitle}>Password</Text>
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters',
              },
            }}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  style={[
                    styles.input,
                    error
                      ? { borderBottomColor: 'red' }
                      : { borderBottomColor: '#667085' },
                  ]}
                  placeholderTextColor="#F3F7FC"
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                />
                {error ? (
                  <View>
                    <Text style={styles.errorText}>{error.message}</Text>
                  </View>
                ) : (
                  <View style={{ marginBottom: 30 }} />
                )}
              </>
            )}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleLogin)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginScreen;
