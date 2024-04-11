import { Platform, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '@/components/Themed';
import CalendarDatePicker from '@/app/src/components/CalendarDatePicker';

export default function ModalScreen() {

  return (
    <View style={styles.container}>
      <Text >Data</Text>
      <CalendarDatePicker />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%'
  },

});
