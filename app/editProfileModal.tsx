import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput } from 'react-native';
import React from 'react'
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edite suas informações</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TextInput
        // value={'email'}
        style={styles.input}
        placeholder="Nome de Exibição"
        autoCapitalize="none"
      // onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <TextInput
        // value={'email'}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
      // onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <TextInput
        // value={'email'}
        style={styles.input}
        placeholder="Senha"
        autoCapitalize="none"
      // onChangeText={(text) => setEmail(text)}
      ></TextInput>



      {/* <EditScreenInfo path="app/editProfileModal.tsx" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  input: {
    backgroundColor: '#FFF',
    width: '80%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 10,
    padding: 10
  },

  buttonSubmit: {
    backgroundColor: '#9489F5',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  submitText: {
    color: '#FFF',
    fontSize: 19
  },


});
