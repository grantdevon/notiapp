import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../theme/colors';
import { TextInput } from 'react-native-paper';


const Login = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Validation Error', 'Please enter both email and password.');
      return;
    }
    navigation.navigate('SignUp');
    // TODO: Add actual login functionality here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>noti.</Text>
      {/* <Image style={styles.image} source={require('../../assets/notiLogo.png')}/> */}
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        label="email"
        mode='outlined'
      />
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        label="password"
        secureTextEntry
        mode='outlined'
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={{color: 'black'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <View style={styles.signUpButtonContainer}>
          <Text style={{color: 'black'}}>Dont have an account? </Text>
          <Text style={styles.signUpText}>Sign up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginVertical: 10,
    width: 250,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginVertical: 20,
    backgroundColor: colors.ctaButton,
  },
  signUpButtonContainer: {
    flexDirection: 'row',
  },
  signUpText: {
    color: colors.ctaButton,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    objectFit: 'contain',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 55,
    marginBottom: 55,
    paddingLeft: 10,
  },
});
