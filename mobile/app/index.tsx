import {Text, TouchableOpacity, View } from 'react-native'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useEffect } from 'react'
import { api } from '../src/lib/api'
import { useRouter } from 'expo-router'

import * as SecureStore from 'expo-secure-store';
import LogoMobile from '../src/assets/logo-mobile.svg'

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/9c20b2c1d008c822bc7b',
};

export default function App() {
  const router = useRouter();
  
  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '9c20b2c1d008c822bc7b',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime'
      }),
    },
    discovery
  )
  async function handleGithubOauthCode(code: string){
    const response = await api.post('/register', {
      code,
    })
    const {token} = response.data
    // console.log(token)
   await SecureStore.setItemAsync('token', token)

   router.push('/memories')
  }

  useEffect(() => {
    if (response?.type === 'success') {
      // console.log( makeRedirectUri({
      //   scheme: 'nlwspacetime'
      // }),)
      const { code } = response.params;

      handleGithubOauthCode(code)
    }
  }, [response]);

  return (
    <View className="flex-1 items-cente px-10 py-10">
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
    </View>
  )
}
