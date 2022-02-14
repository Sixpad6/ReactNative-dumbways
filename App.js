import {NativeBaseProvider, extendTheme} from 'native-base'
import React from 'react';
import AppLoading from 'expo-app-loading';
import{useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins'
import Container from './container';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  })

  const fontConfig = {
    Poppins:{
      400:{
        normal : 'Poppins_400Regular'
      }
    }
  }

  const customColor = {
    secondary : {
      500 : "#ec4899", 
      700 : "#be185d",
      900 : "#831843"
    }
  }

  const theme = extendTheme({
    colors : customColor,
    fontConfig,
    fonts :{
      heading : "Poppins",
      body : "Poppins",
      mono : "Poppins"
    },
    config : {
      initialColorMode : "light"
    }
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
    <NativeBaseProvider theme={theme} >
      <Container />
    </NativeBaseProvider>
  );
  }

  
}