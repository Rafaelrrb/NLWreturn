import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import  {Widget}  from './src/components/Widget';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    
    }}>
      
      <StatusBar 
        style="light" 
        backgroundColor="transparent"
        translucent
      />

      <Widget />
    </View>
  );
}


/*
    Expo
      npm install -g expo-cli
      expo --version
      expo init mobile
      roda o projeto
        expo start

    Fontes (https://docs.expo.dev/guides/using-custom-fonts/)
      expo install expo-font @expo-google-fonts/inter

      expo install expo-splash-screen

    Icones
      https://www.npmjs.com/package/phosphor-react-native
        npm install --save phosphor-react-native

    Biblioteca para imagens em formato svg
      npm install react-native-svg

    Biblioteca para um caso especial no iphone
      npm install react-native-iphone-x-helper

    Biblioteca para criar animações

      https://gorhom.github.io/react-native-bottom-sheet/

        expo install @gorhom/bottom-sheet@^4

      https://docs.expo.dev/versions/latest/sdk/reanimated/

        expo install react-native-reanimated

        Dentro do arquivo babel.config.js botar
          plugins: ['react-native-reanimated/plugin'],

      https://docs.expo.dev/versions/latest/sdk/gesture-handler/

        expo install react-native-gesture-handler

        No App.tsx fazer a importação
          import 'react-native-gesture-handler';

    Biblioteca pra tirar screenshot
      expo install react-native-view-shot

    Biblioteca axios
      npm install axios

    Biblioteca de converção
      expo install expo-file-system


*/