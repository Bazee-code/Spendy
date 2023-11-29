import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Container from '../../../components/container';
import onboarding from '../../../data/onboarding';
import { windowHeight, windowWidth } from '../../configs/dimensions';
import { styles } from './styles';
import * as Routes from '../../navigation/Routes';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.replace(Routes.LOGIN_SCREEN);
  };
  return (
    <Container>
      <FlatList
        data={onboarding}
        initialNumToRender={3}
        horizontal
        renderItem={({ item, index }) => (
          <View style={styles.container} key={item.id}>
            <Image
              source={item?.image}
              style={{
                height: windowHeight * 0.6,
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
        keyExtractor={(item) => item.id}
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default OnboardingScreen;
