import Animated, {
  runOnUI,
  scrollTo,
  useAnimatedRef,
} from 'react-native-reanimated';
import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export default function EmptyExample() {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();

  const handlePress = (animated: boolean) => {
    runOnUI(() => {
      'worklet';
      scrollTo(animatedRef, 0, 0, animated);
    })();
  };

  return (
    <View style={styles.container}>
      <Button title="scrollTo true" onPress={() => handlePress(true)} />
      <Button title="scrollTo false" onPress={() => handlePress(false)} />
      <Animated.ScrollView ref={animatedRef} style={styles.scrollView}>
        {[...Array(500)].map((_, i) => (
          <Text key={i} style={styles.text}>
            {i}
          </Text>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
