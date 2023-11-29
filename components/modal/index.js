import React, { useState, useRef, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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
            <MaterialIcons name="cancel" size={30} color="#FFF" />
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

export const CustomModal = ({ visible, setVisible, children, style }) => {
  return (
    <View style={{ flex: 1 }}>
      <ModalShow visible={visible} setVisible={setVisible}>
        <View style={{ alignItems: 'center' }}>
          {/* <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
            >
              <MaterialIcons name="cancel" size={30} color="#FFF" />
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={[styles.modalContent, style]}>{children}</View>
      </ModalShow>
    </View>
  );
};
