import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qddehuoasjxckueaixkf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkZGVodW9hc2p4Y2t1ZWFpeGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyODQ0MjEsImV4cCI6MjAxNjg2MDQyMX0.54mpNGpj_QaplTBaPxU5_cb7gvbGtzNtZf_hU0882tw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
