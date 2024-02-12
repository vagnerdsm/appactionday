import React from 'react'
import { Text, View } from '@/components/Themed';
import { Button, Image, TouchableOpacity } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabConfig() {
  const imageProfile = auth.currentUser?.photoURL ? auth.currentUser?.photoURL : require('../../assets/images/rdicon.png')
  const username = auth.currentUser?.displayName
  const useremail = auth.currentUser?.email
  
  const signOut = async () => {
      try {
        const response = await auth.signOut();
        console.log(response)
        router.replace("/login")
      } catch (error) {
        console.log(error)
      }
    };

  return (
    <View style={styles.background}>
      <View style={styles.container}>

        <Image style={styles.imageProfile} source={require('../../assets/images/rdicon.png')} />

        <Text style={styles.textHeader}> Unicruz </Text>
        <Text style={styles.textEmail}> setordeti@actiondaydigital.page </Text>

        <View style={styles.optionsMenu}>
          <TouchableOpacity style={styles.buttonMenu}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}> Altere seu Nome </Text>
              <MaterialIcons name="drive-file-rename-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonMenu}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}> Altere seu Email </Text>
              <MaterialIcons name="email" size={24} color="white" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonMenu}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}> Altere sua Senha </Text>
              <MaterialIcons name="password" size={24} color="white" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonMenuLogout}>
            <View style={styles.buttonContentLogout}>
              <Text style={styles.buttonText}> Logout </Text>
              <MaterialIcons name="logout" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
  container: {
    marginTop: 35,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    // color: '#FFF',
    // justifyContent: 'center',
    // width: '90%'
  },
  buttonSignOut: {
    // width: '100%',
  },
  imageProfile: {
    width: 120,
    marginLeft: 12,
    height: 120,
    borderRadius: 8,
  },
  textHeader: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textEmail: {
    color: '#cccccc',
    fontSize: 18,
    fontWeight: 'bold'
  },
  optionsMenu: {
    // alignItems: '',
    width: '90%',
    height: 300,
    marginTop: 20,
    gap: 16,
    backgroundColor: '#e5e5e5',
  },
  buttonMenu: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#7B78AA',
    justifyContent: 'center',
    paddingHorizontal: 10,
    
    // alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonMenuLogout: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#871919',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between', 
    backgroundColor: '#7B78AA',
  },
  buttonContentLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between', 
    backgroundColor: '#871919',
  }
});