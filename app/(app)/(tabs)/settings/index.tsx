import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Text } from 'react-native'

export default function Settings() {
  const session= useLocalSearchParams();
  const {params} = useGlobalSearchParams();
  return (
    <Text>Settings

{params}
    </Text>
  )
}
