import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import List from './compnents/List';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <List></List>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828'
  },
});
