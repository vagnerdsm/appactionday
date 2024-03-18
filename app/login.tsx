import { KeyboardAvoidingView, Pressable, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator, AppState, Alert } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import { Link, Redirect } from 'expo-router';
import { useRouter } from 'expo-router';
import React from 'react';
import { authClient } from '@/supabaseClient';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    authClient.startAutoRefresh()
  } else {
    authClient.stopAutoRefresh()
  }
})

export default function TabOneScreen() {

  const router = useRouter()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const signIn = async () => {
    setLoading(true)
    const { error } = await authClient.signInWithPassword({
      email: email,
      password: password,
    })
    Alert.alert("Logado!")
    if (error) Alert.alert(error.message)
    setLoading(false)
    router.replace("/(tabs)/home")
  }

  
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>

        <Image
          style={styles.logoImage}
          source={require('../assets/images/logo.png')}
        />

        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>

        <TextInput
          value={password}
          style={styles.input}
          placeholder="Senha"
          //keyboardType="visible-password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        {loading ?
          <Pressable style={styles.buttonSubmit} onPress={signIn}>
            <ActivityIndicator size="small" color="#0000ff" />
          </Pressable>
          :
          <Pressable style={styles.buttonSubmit} onPress={signIn}>
            <Text style={styles.submitText}> Acessar </Text>
          </Pressable>}
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

  logoImage: {
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
    color: '#FFF',
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

