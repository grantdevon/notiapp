import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './app/pages/login/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './app/pages/signUp/SignUp';



const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Text>App</Text> */}
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

