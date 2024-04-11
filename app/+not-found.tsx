import { Link, Stack, router } from 'expo-router';
import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Text, View } from '@/components/Themed';
import { authClient } from '@/supabaseClient';

export default function NotFoundScreen() {

  // useEffect(() => {
  //   authClient.getSession().then(({ data: { session } }) => {
  //     if (session) {
  //       router.replace('/(tabs)/home')
  //     }
  //   });

  //   authClient.onAuthStateChange((_event, session) => {
  //     if (session) {
  //       router.replace('/(tabs)/home')
  //     } else {
  //       router.replace('/login')
  //     }
  //   })
  // }, [])

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link href="/home" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
