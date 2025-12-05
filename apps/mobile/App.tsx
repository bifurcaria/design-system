import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Button, Typography } from '@design-system/ui';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fontAssets } from '@design-system/ui/src/utils/fonts';

export default function App() {
  const [fontsLoaded] = useFonts(fontAssets);
  const [count, setCount] = useState(0);
  
  if (!fontsLoaded) {
    return <ActivityIndicator size="small" />
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={() => setCount((count) => count + 1)}>
        <Text>Click me</Text>
      </Button>
      <Text>Count: {count}</Text>
      <Typography>Hi :-) this is a typography component in native.</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
