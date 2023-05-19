import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree/'
import { styled } from 'nativewind'

import blurBg from './src/assets/luz.png'
import Stripes from './src/assets/stripes.svg'
import LogoMobile from './src/assets/logo-mobile.svg'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useEffect } from 'react'


const StyledStripes = styled(Stripes)
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/9c20b2c1d008c822bc7b',
};

export default function App() {
  const [hasLoadedFonts] = useFonts({
    BaiJamjuree_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  })

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '9c20b2c1d008c822bc7b',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime'
      }),
    },
    discovery
  )

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      // console.log( makeRedirectUri({
      //   scheme: 'nlwspacetime'
      // }),)
      console.log(code)
    }
  }, [response]);


  //Só carrega app depois das fontes
  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground source={blurBg}
      className="bg-gray-900 flex-1 items-center relative px-10 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}>

      <StyledStripes className="absolute left-0 top-10" />

      <View className="flex-1  items-center justify-center gap-6">
        <LogoMobile />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          className="rounded-full bg-purple-400 px-5 py-3"
          activeOpacity={0.7}
          onPress={() => signInWithGithub()}>
          <Text className="font-alt text-sm uppercase text-black">
            Cadastre-se lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-gray-100 text-center font-body text-sm leading-relaxed">joãoGui feat Rocketseat 💜</Text>
      <StatusBar style="light" />
    </ImageBackground>
  )
}
