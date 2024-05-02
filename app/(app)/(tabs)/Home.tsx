import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Session } from '@supabase/supabase-js'
import Account from '../../../components/Account'
import Auth from '../../../components/Auth'
import { Link } from 'expo-router'
import { supabase } from '../../../lib/supabase'

export default function Home() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
  
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}