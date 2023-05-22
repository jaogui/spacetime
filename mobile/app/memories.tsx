import { ScrollView, TouchableOpacity, View, } from 'react-native'
import SpaceTimeLogo from '../src/assets/logo-mobile.svg'
import { Link, useRouter } from 'expo-router'
import Icon from '@expo/vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as SecureStore from 'expo-secure-store'

export default function Memory() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()

  async function logOut(){
    await SecureStore.deleteItemAsync('token')
    router.push('/')
  }

  return (
    <ScrollView className="flex-1 px-8" contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
      <View className="mt-4 flex-row items-center justify-between">
        <SpaceTimeLogo />
        <View className="flex-row gap-2">
        <TouchableOpacity onPress={logOut} className="h-10 w-10 items-center justify-center rounded-full bg-red-500">
            <Icon name="log-out" size={16} color="#000" />
          </TouchableOpacity>
        <Link href="/newMemory" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
            <Icon name="plus" size={16} color="#000" />
          </TouchableOpacity>
        </Link>
        </View>
      </View>
    </ScrollView>
  )
}
