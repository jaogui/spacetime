import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree/'

import blurBg from './src/assets/luz.png';

export default function App() {
  const [hasLoadedFonts] = useFonts({
    BaiJamjuree_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  })

  //Só carrega app depois das fontes
  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground source={blurBg}
      className="bg-gray-900 flex-1 items-center relative"
      imageStyle={{position: 'absolute', left: '-100%'}}>
      <StatusBar style="light" />
    </ImageBackground>
  )
}
