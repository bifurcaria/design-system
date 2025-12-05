import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Typography } from '@design-system/ui';
import { useFonts } from 'expo-font';
import { fontAssets } from '@design-system/ui/src/utils/fonts';

export default function App() {
  const [fontsLoaded] = useFonts(fontAssets);
  
  if (!fontsLoaded) {
    return <ActivityIndicator size="small" />
  }
  
  return (
    <View style={styles.container}>
      <Typography>Hi! This is a typography component in native.</Typography>
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
