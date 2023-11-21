import React, { useState, useRef, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Animated, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

const ModalShow = ({ children, visible, setVisible }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
            style={styles.button}
          >
            <Icon name="x" color="#FFF" size={20} />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export const Modal = ({ visible, setVisible, children, style }) => {
  return (
    <View style={{ flex: 1 }}>
      <ModalShow visible={visible} setVisible={setVisible}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
            >
              <Icon name="x" color="#000" size={22} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.modalContent, style]}>{children}</View>
      </ModalShow>
    </View>
  );
};
