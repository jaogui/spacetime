import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native'
import SpaceTimeLogo from '../src/assets/logo-mobile.svg'
import { Link, useRouter } from 'expo-router'
import Icon from '@expo/vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as SecureStore from 'expo-secure-store'
import React from 'react'

export default function Memory() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()

  async function logOut() {
    await SecureStore.deleteItemAsync('token')
    router.push('/')
  }

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
      <View className="mt-4 px-8 flex-row items-center justify-between">
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

      <View className="mt-6 space-y-10">
        <View className="space-y-4">
          <View className=" flex-row items-center gap-2">
            <View className="h-px w-6 bg-gray-50"></View>
            <Text className="text-gray-100">12 de Abril, 2023</Text>
          </View>
          <View className="space-y-4 px-8">
            <Image source={{ uri: 'https://raw.githubusercontent.com/jaogui/spacetime/5f4f67940a52c799671fff232353a845003b7d67/server/uploads/dc3de0d9-cb96-4f95-b17c-c66e978ef717.png' }}
              className="aspect-video w-full rounded-lg" />
            <Text className="text-gray-100 font-body leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem assumenda numquam dolore tempora. Consequatur recusandae dolorum deserunt sit saepe sapiente? Nam autem commodi debitis eos vel quasi ipsum facere laudantium!</Text>

            <Link className="" href="/memores/id">
              <TouchableOpacity className="flex-row items-center gap-2">
                <Text className="font-body text-sm text-gray-200">Ler mais</Text>
                <Icon name="arrow-right" size={13} color={'#9e9ea0'} />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
