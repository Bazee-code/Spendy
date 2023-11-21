import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Container = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
