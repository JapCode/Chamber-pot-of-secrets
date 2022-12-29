import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
} from 'firebase/firestore';
import { db } from './firebaseService';

const getGroupsForFirestore = async (userName: string) => {
  const groups: Array<DocumentData> = [];
  const q = query(
    collection(db, 'group'),
    where('members', 'array-contains', userName),
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data());
    const group = doc.data();
    // console.log(typeof group);
    groups.push(group);
  });
  return groups;
};
export default getGroupsForFirestore;
