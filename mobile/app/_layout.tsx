//Page layout serve para comportar todos elementos que são comuns em outras páginas da aplicação
import { styled } from 'nativewind';
import Stripes from '../src/assets/stripes.svg'
import blurBg from '../src/assets/luz.png'

import React from "react";
import { ImageBackground } from "react-native";
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const StyledStripes = styled(Stripes)


export default function Layout(){
  
const [hasLoadedFonts] = useFonts({
  BaiJamjuree_700Bold,
  Roboto_400Regular,
  Roboto_700Bold
})


if (!hasLoadedFonts) {
  return <SplashScreen />
  
}
  return (
    <ImageBackground source={blurBg}
    className="bg-gray-900 flex-1 items-center relative px-10 py-10"
    imageStyle={{ position: 'absolute', left: '-100%' }}>


    <StyledStripes className="absolute left-0 top-10" />
    <StatusBar style="light" />

    <Slot />
    </ImageBackground>
  )

}