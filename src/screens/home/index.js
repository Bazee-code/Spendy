import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useRef } from 'react';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import payments from '../../../data/payments';
import { windowHeight } from '../../configs/dimensions';
import { Octicons } from '@expo/vector-icons';
import BottomSheet from '../../../components/bottomsheet';

const HomeScreen = () => {
  return (
    <>
      <>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.header}>
              <Text style={styles.headerText}>Today</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#FFF"
              />
            </TouchableOpacity>
            <View style={{ marginTop: 30 }}>
              <Text style={{ color: '#FFF', fontSize: 30, fontWeight: '600' }}>
                Total Spent
              </Text>
            </View>
            <Text style={styles.amountTitle}>6,000 KES</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.descriptionTextContainer}>
              <Text style={{ fontSize: 22, color: '#080416' }}>Payments</Text>
              <Text
                style={{ fontSize: 16, color: '#808080', fontWeight: '600' }}
              >
                View all
              </Text>
            </View>
            <ScrollView
              contentContainerStyle={{ backgroundColor: '#FFF' }}
              horizontal={false}
              showsVerticalScrollIndicator={false}
            >
              {payments.length > 0 ? (
                payments.map((payment, index) => (
                  <View key={payment.id} style={styles.paymentContainer}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <View
                        style={[styles.dot, { backgroundColor: payment.color }]}
                      />
                      <View>
                        <Text style={styles.paymentTitle}>{payment.title}</Text>
                        <Text style={styles.paymentCategory}>
                          {payment.categories}
                        </Text>
                      </View>
                    </View>
                    <View>
                      {payment.reminderSet ? (
                        <Text style={styles.reminder}>Reminder set</Text>
                      ) : (
                        <Text style={styles.reminder}>No reminder</Text>
                      )}
                      <Text style={styles.date}>{payment.date}</Text>
                    </View>
                  </View>
                ))
              ) : (
                <View style={{ height: windowHeight * 0.6 }}>
                  <Text style={styles.noPayment}>No payments made</Text>
                </View>
              )}
              <View style={{ height: windowHeight * 0.5 }} />
            </ScrollView>
          </View>
          <BottomSheet />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Octicons name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
      </>
    </>
  );
};

export default HomeScreen;
