import { View, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navisgation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const image = { uri: 'https://i.pinimg.com/564x/59/f7/e3/59f7e3c963993ca2ce195b045fc7657f.jpg' };
  return (
    <View style={{flex: 1}}>
      {/*BG image*/}
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
      {/*Title Info*/}  
         <View style={{flex: 1, padding: 20, position :'relative', top: 200}}>
            <Text style={{fontSize: 40, marginBottom: 20}}>Canva Guide App</Text>
            <Text style={{width: '70%', fontSize: 20,marginBottom:20}}>Welcome to the Canva Guide App, your personalized tutor for mastering the art of design with Canva. This app is designed especially for beginners, providing step-by-step tutorials to help you navigate Canva with ease.</Text>
       
              {/*BTN*/}
            <Pressable style={{backgroundColor: 'black',width: 145, padding: 3,position: 'absolute', right: 20,top: 350 }} onPress={() => navigation.navigate('Tutorial')}>
              <Text style={{color: 'white', fontSize: 24, borderRadius: 50, textAlign: 'center'}}>Let's Start</Text>
            </Pressable>
          </View>
      </ImageBackground>a
        <StatusBar style='auto'/>
    </View>
  )
}