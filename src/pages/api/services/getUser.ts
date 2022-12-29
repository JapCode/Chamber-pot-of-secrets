import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseService';

const getUserFromFirestore = async (userName: string) => {
  const userRef = collection(db, 'users');
  const q = await query(userRef, where('name', '==', userName));
  const querySnapshot = await getDocs(q);
  let user: any;
  await querySnapshot.forEach((doc) => {
    user = doc.data();
  });
  return user;
};
export default getUserFromFirestore;
