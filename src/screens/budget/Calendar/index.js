import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import CalendarHeader from 'react-native-calendars/src/calendar/header';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

const CustomCalendar = ({ selectedDate, setSelectedDate }) => {
  const calendarRef = useRef(null);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <View>
      <Calendar
        innerRef={calendarRef}
        onDayPress={(day) => {
          // console.log('selected day', day);
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: 'green',
            disableTouchEvent: true,
            selectedTextColor: '#FFF',
          },
        }}
        monthFormat={'yyyy MM'}
        hideArrows={true}
        hideExtraDays={true}
        disableMonthChange={false}
        hideDayNames={false}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        customHeader={(date) => {
          const d = date?.month;
          const currentMonth = monthNames[d.getMonth()];
          const currentYear = d.getFullYear();

          return (
            <>
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                  {currentMonth} {currentYear}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => date.addMonth(-1)}
                    style={{ marginRight: 30 }}
                  >
                    <AntDesign name="left" color="#6C63FF" size={16} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => date.addMonth(+1)}>
                    <AntDesign name="right" color="#6C63FF" size={16} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <CalendarHeader />
              </View>
            </>
          );
        }}
        style={{
          backgroundColor: '#FFF',
        }}
        theme={{
          calendarBackground: '#FFF',
          weekVerticalMargin: 10,
          textDayFontSize: 18,
          todayBackgroundColor: '#6C63FF',
          todayTextColor: '#FFF',
          textDayFontWeight: '400',
          textDayStyle: { color: '#6C63FF' },
          todayButtonFontSize: 20,
          dotColor: '#6C63FF',
          selectedDotColor: '#000',
          selectedDayBackgroundColor: '#000',
          'stylesheet.day.period': {
            base: {
              overflow: 'hidden',
              height: 34,
              alignItems: 'center',
              width: 38,
            },
          },
        }}
      />
    </View>
  );
};

export default CustomCalendar;
