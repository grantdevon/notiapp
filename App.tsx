import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './app/pages/login/Login'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>App</Text> */}
      <Login />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})