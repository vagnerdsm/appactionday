import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Platform, Pressable, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react'
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { auth, db } from '@/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { router } from 'expo-router';

export default function ModalScreen() {
  const useruid = auth.currentUser?.uid.toString()
  const [userInfo, setUserInfo] = useState<any | undefined>(null);
  const [displayName, setDisplayName] = useState<any | undefined>(null);
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    const docRef = doc(db, "users", `${useruid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateUserData = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "users", `${useruid}`)
      const docSnap = await setDoc(docRef, {
        display_name: `${displayName}`,
      }, {merge: true});
      router.replace("/(tabs)/config");
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edite suas informações</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text>Nome de exibição</Text>
      <TextInput
        // value={userInfo?.display_name}
        style={styles.input}
        placeholder="Nome de Exibição"
        autoCapitalize="none"
      onChangeText={(text) => setDisplayName(text)}

      ></TextInput>


      {/* <Text>Email</Text>
      <TextInput
        value={userInfo?.email}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
      // onChangeText={(text) => setEmail(text)}
      ></TextInput> */}

      { loading ?
        <Pressable style={styles.buttonSubmit} onPress={updateUserData}>
          <ActivityIndicator size="small" color="#0000ff" />
        </Pressable>
        :
        <Pressable style={styles.buttonSubmit} onPress={updateUserData}>
          <Text style={styles.submitText}> Alterar </Text>
        </Pressable>
      }
      
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
