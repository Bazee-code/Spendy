import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Container from '../../../components/container';
import onboarding from '../../../data/onboarding';
import { windowHeight, windowWidth } from '../../configs/dimensions';
import { styles } from './styles';
import { router } from 'expo-router';

const Onboarding = () => {
  const handleHome = () => {
    router.replace('/home');
  };
  return (
    <Container>
      <FlatList
        data={onboarding}
        initialNumToRender={3}
        horizontal
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Image
              source={item?.image}
              style={{
                height: windowHeight * 0.7,
                width: windowWidth,
                paddingHorizontal: 10,
              }}
            />
            <Text style={styles.title}>{item?.title}</Text>

            {index === 2 ? (
              <TouchableOpacity style={styles.button} onPress={handleHome}>
                <Text style={styles.buttonText}>START</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
        keyExtractor={({ index }) => index}
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default Onboarding;
