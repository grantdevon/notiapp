import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {Alert} from 'react-native';
import { uploadUserProfilePhoto } from './storage-service';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../../firebase/firebase';

const auth = getAuth();

interface userDetails {
    userName: string,
    name: string,
    email: string
}

export const signUpUser = (email: string, password: string, file: Blob | Uint8Array | ArrayBuffer, userDetails: userDetails) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCred) => {
        const user = userCred.user;
        const userId = userCred.user.uid
        uploadUserProfilePhoto(userId, file)

        await setDoc(doc(db, "Users", userId), userDetails);

    })
    .catch(err => {
      Alert.alert(
        'There was an issue creating your profile, please try again later',
        err.message
      );
    });
};
