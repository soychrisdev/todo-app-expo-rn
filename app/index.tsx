import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import Account from '../components/Account'
import Auth from '../components/Auth'
import { Link } from 'expo-router'
import { useSession } from '../hook/ctx'

export default function App() {
  // const [session, setSession] = useState<Session | null>(null)

  const { session,  signIn , isLoading, signOut} = useSession();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      signIn(session?.access_token)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      signIn(session)
    })
  }, [])

  return (
    <View>
      <Auth />
    </View>
  )
}