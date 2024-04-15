import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import React from 'react'
import { useColorScheme } from '@/components/useColorScheme';
import { authClient } from '@/supabaseClient';
import { Session } from '@supabase/supabase-js';
import CalendarDatePicker from './src/components/CalendarDatePicker';
import home from './(tabs)/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/(tabs)/config',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // const [session, setSession] = useState<Session | null>(null)

  // useEffect(() => {
  //   authClient.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   authClient.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  //   console.log(session)
  // }, [])

  return <RootLayoutNav />;
}


function RootLayoutNav() {
  const colorScheme = useColorScheme();



  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="editProfileModal" options={{ presentation: 'modal', headerTitle: '' }} />
        </Stack>
      </QueryClientProvider>
    </ThemeProvider>
  );
}



