import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold} from '@expo-google-fonts/bai-jamjuree/'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    BaiJamjuree_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  })

  //Só carrega app depois das fontes
  if(!hasLoadedFonts) {
    return null
  }

  return (
    <View className="bg-gray-400 flex-1 items-center justify-center">
      <Text className="text-lg font-alt text-gray-50">Hello Big</Text>
      <StatusBar style="light" />
    </View>
  )
}
