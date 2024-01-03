import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../theme/colors';
import {TextInput} from 'react-native-paper';
import {Avatar, Badge} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import FormInputs from '../../components/FormInputs/FormInputs';
import {signUpUser} from '../../services/Firebase/auth-service';
import Loader from '../../components/Loader/Loader';

const SignUp = () => {
  const [profilePhoto, setProfilePhoto] = useState(
    require('../../assets/user.png'),
  );
  const [hasSelectedImage, setHasSelectedImage] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
      });

      if (!result.didCancel) {
        const image =
          Platform.OS === 'ios'
            ? result.assets[0].uri.replace('file://', '')
            : result.assets[0].uri;
        setHasSelectedImage(true);
        setProfilePhoto(image);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const validateInputs = () => {
    // Basic validation for required fields
    if (!userName || !name || !email || !password || !confirmPassword) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return false;
    }
  
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return false;
    }
  
    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Validation Error',
        'Password must contain at least one capital letter, one number, and one unique symbol (!@#$%^&*()_+).',
      );
      return false;
    }
  
    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match.');
      return false;
    }
  
    return true;
  };
  

  const signUp = async () => {
    if (validateInputs()) {
        try {
          setLoading(true);
  
          const userDetails = {
            userName: userName,
            name: name,
            email: email,
          };
  
          await signUpUser(email, password, profilePhoto, userDetails);
  
          // Do any post-signup logic here
        } catch (error) {
          Alert.alert('Sign Up Error', 'There was an error during sign up. Please try again.');
        } finally {
          setLoading(false);
        }
      }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={pickImage}>
          <Avatar.Image
            size={94}
            source={hasSelectedImage ? {uri: profilePhoto} : profilePhoto}
            style={{alignSelf: 'center', marginBottom: 15}}
          />
        </TouchableOpacity>
        <FormInputs
          userName={userName}
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setUserName={setUserName}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={{color: 'black'}}>Create Account</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loader text="Signing up..." />}

    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 75,
    borderRadius: 15,
    backgroundColor: colors.ctaButton,
  },
  input: {
    width: 250,
    marginVertical: 5,
  },
});
