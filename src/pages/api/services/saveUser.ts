import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseService';

type FirebaseUser = {
  uid: number;
  displayName: string;
  photoURL: string;
  email: string;
};

// const saveUserToFirestore = (user: FirebaseUser) => {
//   const userRef = db.collection('user');
//   userRef.doc(user.uid).set({
//     uid: user.uid,
//     displayName: user.displayName,
//     photoURL: user.photoURL,
//     email: user.email,
//   });
// };
// const docRef = await addDoc(collection(db, 'user'), {
//   uid: user.uid,
//   displayName: user.displayName,
//   photoURL: user.photoURL,
//   email: user.email,
// });
const addUserToFirestore = async (user: FirebaseUser) => {
  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
  });
};
export default addUserToFirestore;
