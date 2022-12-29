import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebaseService';

const searchIdInFirestore = async (userName: string) => {
  const userRef = collection(db, 'users');
  const q = await query(userRef, where('name', '==', userName));
  const querySnapshot = await getDocs(q);
  let docId: string | undefined;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docId = doc.id;
  });
  if (docId === undefined) {
    throw new Error('The id is undefined');
  } else {
    return docId;
  }
};
export default searchIdInFirestore;
