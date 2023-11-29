import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View>
      <SafeAreaView style={{ flex: 1 }} />
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../../assets/profile.jpg')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit-2" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.profileName}>Eugene Obare</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.icon}>
            <MaterialIcons name="email" size={18} color="#FFF" />
          </View>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              value="eugeneobare@gmail.com"
              style={styles.input}
              disabled={true}
            />
          </View>
        </View>
        <View style={[styles.formContainer, { marginVertical: 20 }]}>
          <View style={styles.icon}>
            <AntDesign name="calendar" size={18} color="#FFF" />
          </View>
          <View>
            <Text style={styles.inputTitle}>Registered in</Text>
            <TextInput
              value="29 Nov 2023"
              style={styles.input}
              disabled={true}
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.icon}>
            <AntDesign name="user" size={18} color="#FFF" />
          </View>
          <View>
            <Text style={styles.inputTitle}>You invite, you win</Text>
          </View>
        </View>
        <View style={[styles.formContainer, { marginTop: 50 }]}>
          <MaterialIcons name="logout" size={30} color="#6C63FF" />
          <View>
            <Text style={[styles.inputTitle, { marginLeft: 10, fontSize: 20 }]}>
              Logout
            </Text>
          </View>
        </View>
        <Text style={[styles.title, { marginVertical: 40, fontSize: 18 }]}>
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
