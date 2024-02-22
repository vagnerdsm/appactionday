import React, { useEffect, useState, useContext } from 'react'
import { Text, View } from '@/components/Themed';
import { Button, Image, Pressable, Switch, TouchableOpacity, useColorScheme } from 'react-native';
import { auth, db } from '../../firebaseConfig';
import { Link, Redirect, Stack, router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { SafeAreaView } from 'react-native-safe-area-context';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { useTheme } from '@react-navigation/native';
import { userInfosContext } from '@/context/userContext';
import { User } from 'firebase/auth';


export default function TabConfig() {
  // const username = auth.currentUser?.displayName
  // const useremail = auth.currentUser?.email

  const [userInfo, setUserInfo] = useState<any | undefined>(null);
  const useruid = auth.currentUser?.uid.toString()

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const toggleSwitch = () => useTheme();

  const signOut = async () => {
    try {
      const response = await auth.signOut();
      console.log(response)
      // setUserInfo("")
      router.replace("/login")
    } catch (error) {
      console.log(error)
    }
  };

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
    // getData();
  }, []);

  const { colors } = useTheme();
  
  return (
    <SafeAreaView style={[styles.background]}>
      <Stack.Screen options={{}} />
      <View style={[styles.container]}>


        <Image style={[styles.imageProfile]} source={{ uri: `${userInfo?.photo_url}` }} />

        {/* {imagePlace ? (
          <Image source={{ uri: `${userInfo.photoURL}` }} style={styles.imageProfile} />
        ) : (
          <></>
        )} */}

        <Text style={styles.textHeader}> {userInfo?.display_name} </Text>
        <Text style={styles.textEmail}> {userInfo?.email} </Text>

        <View style={[styles.optionsMenu]}>


          <Link href="/editProfileModal" asChild>
            <TouchableOpacity >
              <View style={[styles.buttonMenu, styles.shadowProp, styles.elevation]}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}> Editar suas informações </Text>
                  <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          </Link>

          {/* <Link href="/modal" asChild>
            <TouchableOpacity >
              <View style={[styles.buttonMenu, styles.shadowProp, styles.elevation]}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}> Editar foto de perfil </Text>
                  <MaterialIcons name="photo-camera" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          </Link> */}

          <Link href="/modal" asChild>
            <TouchableOpacity >
              <View style={[styles.buttonMenu, styles.shadowProp, styles.elevation]}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}> Reportar um problema </Text>
                  <MaterialIcons name="contact-support" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          </Link>



          <View style={[styles.buttonMenu, styles.shadowProp, styles.elevation]}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}> Dark Mode </Text>
              {/* <MaterialIcons name="contact-support" size={24} color="black" /> */}
              <Switch
                // style={styles.switch}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>


          {/* <TouchableOpacity style={[styles.buttonMenu, styles.shadowProp, styles.elevation]}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}> Altere seu Email </Text>
              <MaterialIcons name="email" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonMenu, styles.shadowProp, styles.elevation]}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}> Altere sua Senha </Text>
              <MaterialIcons name="password" size={24} color="black" />
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity style={[styles.buttonMenuLogout, styles.shadowProp, styles.elevation]} onPress={signOut}>
            <View style={styles.buttonContentLogout}>
              <Text style={styles.buttonTextLogout}> Logout </Text>
              <MaterialIcons name="logout" size={24} color="#cc0000" />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  switch: {
    width: 50,
    height: 100,
    borderRadius: 12,
  },
  background: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  // tag: (tagColor: any) => ({
  //   backgroundColor: tagColor,
  // }),
  container: {
    // marginTop: ,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
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
    borderColor: 'black',
    borderWidth: 1,
    elevation: 15,
    shadowColor: '#171717',

  },

  // imageProfileView: {
  //   borderRadius: 8,
  //   // back: "#f2f2f2",

  // },

  textHeader: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textEmail: {
    color: '#666666',
    fontSize: 22,
    fontWeight: 'bold'
  },
  optionsMenu: {
    // alignItems: '',
    width: '90%',
    height: 300,
    marginTop: 20,
    gap: 16,
    backgroundColor: '#f2f2f2',
  },
  buttonMenu: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 10,

    // alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonMenuLogout: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  buttonContentLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  buttonTextLogout: {
    color: '#cc0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 15,
    shadowColor: '#171717',
  },

});

