import { collection, addDoc, Timestamp, doc } from 'firebase/firestore';
import { db } from '../services/firebaseService';

type Message = {
  message: string;
  createBy: string;
  createAt: string;
};

const messageToFirestore = async (
  userId: string,
  groupId: string,
  message: Message,
) => {
  const userRef = await doc(db, 'users', userId);
  const groupRef = await doc(db, 'message', groupId);
  await addDoc(collection(groupRef, 'messages'), {
    message,
    createBy: userRef,
    createAt: Timestamp.now(),
  });
};
export default messageToFirestore;
