import { Platform, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '@/components/Themed';
import CalendarDatePicker from '@/app/src/components/CalendarDatePicker';
import CDatePicker from './src/components/CDatePicker';

export default function ModalScreen() {

  return (
    <View style={styles.container}>

      <CDatePicker />
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
