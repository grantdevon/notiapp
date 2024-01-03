// FormInputs.js
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface inputsInterface {
  userName: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  setUserName: (value: string) => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
}

const FormInputs: FC<inputsInterface> = ({
  userName,
  name,
  email,
  password,
  confirmPassword,
  setUserName,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
}) => (
  <View>
    <TextInput
      style={styles.input}
      value={userName}
      label="user name"
      onChangeText={setUserName}
      mode="outlined"
    />
    <TextInput
      style={styles.input}
      value={name}
      label="name"
      onChangeText={setName}
      mode="outlined"
    />
    <TextInput
      style={styles.input}
      value={email}
      label="email"
      onChangeText={setEmail}
      mode="outlined"
    />
    <TextInput
      style={styles.input}
      value={password}
      label="password"
      onChangeText={setPassword}
      mode="outlined"
    />
    <TextInput
      style={styles.input}
      value={confirmPassword}
      label="confirm password"
      onChangeText={setConfirmPassword}
      mode="outlined"
    />
  </View>
);

export default FormInputs;

const styles = StyleSheet.create({
  input: {
    width: 250,
    marginVertical: 5,
  },
});
