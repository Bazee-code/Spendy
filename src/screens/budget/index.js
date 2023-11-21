import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { Octicons } from '@expo/vector-icons';
import BottomSheet from '../../../components/bottomsheet';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { SPRING_CONFIG, SPRING_CONFIG2 } from '../../configs/constants';
import { windowHeight, windowWidth } from '../../configs/dimensions';
import { CustomModal } from '../../../components/modal';
import CustomCalendar from './Calendar';
import AddIncome from './AddIncome';
import income from '../../../data/income';

const BudgetScreen = () => {
  const [locationTop, setLocationTop] = useState(useSharedValue(windowHeight));
  const [revertAnim, setRevertAnim] = useState(false);

  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePress = (value) => {
    (locationTop.value = withSpring(windowHeight / value)),
      {
        SPRING_CONFIG,
      };
    setRevertAnim(false);
  };

  const handleClose = (value) => {
    (locationTop.value = withSpring(windowHeight / value)),
      {
        SPRING_CONFIG2,
      };
  };

  const handleShow = () => {
    setVisible(true);
  };
  return (
    <>
      <View style={{ padding: 10 }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }} />
        <TouchableOpacity style={styles.titleContainer} onPress={handleShow}>
          <Text style={styles.title}>November</Text>
          <AntDesign name="down" size={18} color="#16112B" />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>Balance</Text>
            <Text style={styles.amountText}>10,000 KES</Text>
          </View>
          <View style={styles.budgetContainer}>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={styles.budgetText}>Total Income</Text>
              <Text style={[styles.budgetAmount, { color: '#AAFF00' }]}>
                20,000 KES
              </Text>
            </View>
            <View>
              <Text style={styles.budgetText}>Expenses</Text>
              <Text style={[styles.budgetAmount, { color: '#EE4B2B' }]}>
                10,000 KES
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionTextContainer}>
            <Text style={{ fontSize: 22, color: '#080416' }}>Income</Text>
            <Text style={{ fontSize: 16, color: '#808080', fontWeight: '600' }}>
              View all
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={{ backgroundColor: '#FFF' }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            {income.length > 0 ? (
              income.map((income, index) => (
                <View key={income.id} style={styles.paymentContainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={[styles.dot, { backgroundColor: income.color }]}
                    />
                    <View>
                      <Text style={styles.paymentTitle}>{income.title}</Text>
                      <Text style={styles.paymentCategory}>
                        {income.categories}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={styles.reminder}>{income.amount}</Text>
                    <Text style={styles.date}>{income.date}</Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={{ height: windowHeight * 0.6 }}>
                <Text style={styles.noPayment}>No income added</Text>
              </View>
            )}
            <View style={{ height: windowHeight * 0.5 }} />
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handlePress(3.8)}
      >
        <Octicons name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
      <BottomSheet
        handlePress={handlePress}
        handleClose={handleClose}
        top={locationTop}
        revertAnim={revertAnim}
        setRevertAnim={setRevertAnim}
      >
        <View style={{ height: windowHeight }}>
          <AddIncome handleClose={handleClose} />
        </View>
      </BottomSheet>
      <CustomModal visible={visible} setVisible={setVisible}>
        <CustomCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </CustomModal>
    </>
  );
};

export default BudgetScreen;
