import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import payments from '../../../data/payments';
import { windowHeight } from '../../configs/dimensions';
import { Octicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Today</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: '#FFF', fontSize: 30, fontWeight: '600' }}>
              Total Spent
            </Text>
          </View>
          <Text
            style={{
              color: '#FFF',
              fontSize: 33,
              fontWeight: '800',
              marginTop: 10,
            }}
          >
            6,000 KES
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 22, color: '#080416' }}>Payments</Text>
            <Text style={{ fontSize: 16, color: '#808080', fontWeight: '600' }}>
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
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        backgroundColor: payment.color,
                        marginRight: 10,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          color: '#080416',
                          fontSize: 22,
                          fontWeight: '600',
                        }}
                      >
                        {payment.title}
                      </Text>
                      <Text
                        style={{
                          color: '#808080',
                          fontSize: 15,
                          fontWeight: '600',
                        }}
                      >
                        {payment.categories}
                      </Text>
                    </View>
                  </View>
                  <View>
                    {payment.reminderSet ? (
                      <Text
                        style={{
                          color: '#808080',
                          fontSize: 18,
                          fontWeight: '600',
                        }}
                      >
                        Reminder set
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: '#808080',
                          fontSize: 18,
                          fontWeight: '600',
                        }}
                      >
                        No reminder
                      </Text>
                    )}
                    <Text
                      style={{
                        color: '#808080',
                        fontSize: 14,
                        fontWeight: '600',
                      }}
                    >
                      {payment.date}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={{ height: windowHeight * 0.6 }}>
                <Text
                  style={{
                    color: '#808080',
                    fontSize: 22,
                    fontWeight: '600',
                  }}
                >
                  No payments made
                </Text>
              </View>
            )}
            <View style={{ height: windowHeight * 0.5 }} />
          </ScrollView>
        </View>
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 5,
          right: 10,
          backgroundColor: '#6C63FF',
          height: 50,
          width: 50,
          borderRadius: 25,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Octicons name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
    </>
  );
};

export default Home;
