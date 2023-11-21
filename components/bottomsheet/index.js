import { View } from 'react-native';
import React, { memo } from 'react';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { styles } from './styles';
import { windowHeight } from '../../src/configs/dimensions';
import { SPRING_CONFIG } from '../../src/configs/constants';

const BottomSheet = ({
  top,
  children,
  title,
  handleClose,
  setRevertAnim,
  revertAnim,
}) => {
  const style = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });

  const MAX_TRANSLATE_Y = -windowHeight + 50;

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
      top.value = Math.max(top.value, MAX_TRANSLATE_Y);
    },
    onEnd() {
      if (top.value > -windowHeight / 3) {
        top.value = windowHeight;
        runOnJS(setRevertAnim)(true);
      }
      //  else if (top.value < -windowHeight / 1.5) {
      //   top.value = MAX_TRANSLATE_Y;
      // }
      else {
        top.value = -windowHeight / 2;
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, style]}>
        <View style={styles.headerContainer}>
          <View style={[styles.headerPills, { backgroundColor: '#786B9C' }]} />
          <View
            style={[
              styles.headerPills,
              {
                backgroundColor: 'rgba(120, 107, 156, 0.33)',
                width: 40,
                marginVertical: 0,
              },
            ]}
          />
        </View>

        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default memo(BottomSheet);

export const Sheet = ({
  top,
  children,
  title,
  handleClose,
  setRevertAnim,
  revertAnim,
}) => {
  const style = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });

  return (
    <Animated.View style={[styles.sheetContainer, style]}>
      {children}
    </Animated.View>
  );
};
