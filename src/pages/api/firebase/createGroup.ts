import { collection, addDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebaseService';

interface Group {
  user: string;
  members: Array<string>;
  groupName: string | null;
  // recentMessages: {
  //   messageText: string;
  //   readBy: {
  //     sentAt: string;
  //     sentBy: string;
  //   };
  // };
  groupType: number;
}

const createdGroupToFirestore = async (data: Group) => {
  const { user, members, groupName, groupType } = data;
  const newDoc = await addDoc(collection(db, 'group'), {
    createAt: Timestamp.now(),
    createBy: user,
    id: null,
    messageId: null,
    members,
    modifiedAt: Timestamp.now(),
    recentMessage: {
      messageText: null,
      readBy: {
        sentAt: null,
        sentBy: null,
      },
    },
    groupName,
    groupType,
  });
  const newMessageCollection = await addDoc(collection(db, 'message'), {});
  // return newDoc.id;
  await updateDoc(newDoc, {
    id: newDoc.id,
    messageId: newMessageCollection.id,
  });
};
export default createdGroupToFirestore;
