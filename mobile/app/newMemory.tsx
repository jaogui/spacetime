import { Switch, Text, TouchableOpacity, View } from 'react-native'
import SpaceTimeLogo from '../src/assets/logo-mobile.svg'
import { Link } from 'expo-router'
import Icon from '@expo/vector-icons/Feather'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()
  const [isPublic, setIsPublic] = useState(false)

  return (
    <View className="flex-1 px-8" style={{ paddingBottom: bottom, paddingTop: top }}>
      <View className="mt-4 flex-row items-center justify-between">
        <SpaceTimeLogo />
        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#FFF" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-6 space-y-6 ">
        <View className="flex-row items-center gap-2">
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
            thumbColor={'#9b79ea'}
            trackColor={{ false: "#56565a", true: "#727275" }}
          />

          <Text className="font-body text-base text-gray-200">Tornar memória pública</Text>
        </View>

        <TouchableOpacity 
          activeOpacity={0.7}
        className="h-32 justify-center items-center rounded-lg border-dashed border-gray-500
         bg-black/20">
          <View className="flex-row items-center gap-2">
            <Icon name="image" color="#FFF" />
            <Text className='font-body text-sm text-gray-200 items-center'>
              Adicionar Foto ou video de capa
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
