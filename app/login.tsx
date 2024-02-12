import { KeyboardAvoidingView, Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { Link, Redirect } from 'expo-router';
import { useRouter } from 'expo-router';
import React from 'react';



export default function TabOneScreen() {

  const router = useRouter()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  // setEmail('setordeti@actiondaydigital.page')
  // setPassword('actionday')

  // const auth = getAuth();
  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
      router.replace("/(tabs)/")
    } catch (error: any) {
      alert(error.message)
    }
  }

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
        {/* <Image source={require('../assets/images/logo.png')} style={styles.logoImage}/> */}

        {/* <Text style={styles.textHeader}>
        </Text> */}

        {/* <Text style={styles.descriptionHeader}>
          <Text></Text>
          <Text></Text>

        </Text> */}


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

        <Pressable style={styles.buttonSubmit} onPress={signIn}>
          <Text style={styles.submitText} >Acessar</Text>
        </Pressable>
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
function initializeApp(firebaseConfig: any) {
  throw new Error('Function not implemented.');
}

