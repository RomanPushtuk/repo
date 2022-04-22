import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Твоя погода</Text>
    </View>
  );
};
