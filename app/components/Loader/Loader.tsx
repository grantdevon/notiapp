import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface LoaderProps {
  text: string;
}

const Loader: FC<LoaderProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>{text}</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
