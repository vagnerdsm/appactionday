

import { ScrollViewStyleReset } from 'expo-router/html';
import React from 'react';
import
  {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard
  } from 'react-native';
import { StyleSheet } from 'react-native';


export default function Login() {
  
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        {/* <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              
            }}
            source={require('../assets/images/logo.png')}
          />
        </View> */}
        <Image source={require('../assets/images/logo.png')} style={styles.logoImage}/>
         
        {/* <Text style={styles.textHeader}>
          Bem-Vindo!
        </Text>

        <Text style={styles.descriptionHeader}>
          Preencha as informações abaixo para acessar sua conta.
        </Text> */}


        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          //keyboardType="visible-password"
          textContentType="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={styles.submitText} >Acessar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262450'
  },

  logoImage:{
    width: '60%',
    height: 70,
    resizeMode: 'contain',
    marginBottom: 30
  },

  textHeader: {
    width: '90%',
    marginBottom: 2,
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  },
  
  descriptionHeader: {
    width: '90%',
    fontSize: 14,
    color: '#7B78AA',
    marginBottom: 26
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },

  /*
  logo: {
    width: 170,
    height: 195
  },
  */

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



