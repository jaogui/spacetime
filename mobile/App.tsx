import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-slate-500 flex-1'>
      <Text className='bg-black'>Hello word</Text>
      <StatusBar style="auto" />
    </View>
  );
}
