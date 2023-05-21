//Page layout serve para comportar todos elementos que são comuns em outras páginas da aplicação
import { styled } from 'nativewind';
import Stripes from '../src/assets/stripes.svg'
import blurBg from '../src/assets/luz.png'

import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from 'expo-secure-store'

const StyledStripes = styled(Stripes)


export default function Layout(){

  const [isUserAuthenticated, setIsUserAuthenticade] = useState<null | boolean>(null)
  
const [hasLoadedFonts] = useFonts({
  BaiJamjuree_700Bold,
  Roboto_400Regular,
  Roboto_700Bold
})

useEffect(()=>{
  SecureStore.getItemAsync('token').then(token =>{
    // console.log(!!token)
    setIsUserAuthenticade(!!token)
  })
}, [])


if (!hasLoadedFonts) {
  return <SplashScreen />
  
}
  return (
    <ImageBackground source={blurBg}
    className="bg-gray-900 flex-1 relative"
    imageStyle={{ position: 'absolute', left: '-100%' }}>
    <StyledStripes className="absolute lef-2" />
    <StatusBar style="light" translucent />

    <Stack screenOptions={{headerShown: false, contentStyle:{backgroundColor: 'transparent'}}} >
    <Stack.Screen name="index"  redirect={isUserAuthenticated}/>
    <Stack.Screen name="newMemory" />

        </Stack>

    </ImageBackground>
  )

}