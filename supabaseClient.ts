// import AsyncStorage from '@react-native-async-storage/async-storage'
// import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = "https://phwxogeykqntmpzvzgmn.supabase.co"
const supabaseAnonKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBod3hvZ2V5a3FudG1wenZ6Z21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MzM1MzcsImV4cCI6MjAyNTQwOTUzN30.mNB3v1lBv88FaVcVQNojWCR5vFUdBuF9QTrLFZs1NIE"

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        // storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
})

// Access auth admin api    
export const authClient = supabase.auth