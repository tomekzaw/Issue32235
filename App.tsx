import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

export default function EmptyExample() {
  const ref = useRef<ScrollView | null>(null);

  const handlePress = (animated: boolean) => {
    ref.current?.scrollTo({y: 0, animated});
  };

  return (
    <View style={styles.container}>
      <Button title="scrollTo true" onPress={() => handlePress(true)} />
      <Button title="scrollTo false" onPress={() => handlePress(false)} />
      <ScrollView ref={ref} style={styles.scrollView}>
        {[...Array(500)].map((_, i) => (
          <Text key={i} style={styles.text}>
            {i}
          </Text>
        ))}
      </ScrollView>
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
