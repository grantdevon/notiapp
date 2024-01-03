import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const uploadUserProfilePhoto = (userId: string, file: Blob | Uint8Array | ArrayBuffer) => {
    const photoRef = ref(storage, `user/${userId}`);
    uploadBytes(photoRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      }).catch((err: any) => {
        console.log(err)
      });
}