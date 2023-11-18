import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Container from '../../../components/container';
import onboarding from '../../../data/onboarding';
import { windowHeight, windowWidth } from '../../configs/dimensions';
import { styles } from './styles';

const Onboarding = () => {
  return (
    <Container>
      <FlatList
        data={onboarding}
        initialNumToRender={3}
        horizontal
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
              <TouchableOpacity
                style={{
                  backgroundColor: '#6C63FF',
                  borderRadius: 12,
                  width: windowWidth * 0.8,
                  padding: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 15,
                }}
              >
                <Text
                  style={{ fontSize: 18, color: '#FFF', fontWeight: '700' }}
                >
                  START
                </Text>
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
