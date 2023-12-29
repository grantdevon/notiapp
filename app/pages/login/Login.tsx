import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../theme/colors';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>noti.</Text>
      {/* <Image style={styles.image} source={require('../../assets/notiLogo.png')}/> */}
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="email"
      />
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={login}>
        <View style={styles.signUpButtonContainer}>
          <Text>Dont have an account? </Text>
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
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    color: 'black',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.ctaButton,
    width: 250
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
