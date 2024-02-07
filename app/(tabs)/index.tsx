import React from 'react'
import { View, Text } from '@/components/Themed';
import { Pressable, StyleSheet, TextInput, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { root } from 'postcss';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <Text><strong>R$100,00</strong></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent:"center",
    width: "160px",
    height: "100px",
    borderRadius: "8px",
    margin: "12px",
    alignItems: "center",
    backgroundColor: "#ccc"
  }
})

