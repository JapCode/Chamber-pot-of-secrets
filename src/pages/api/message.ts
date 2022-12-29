import type { NextApiRequest, NextApiResponse } from 'next';
import messageToFirestore from './firebase/messageCollection';
import searchIdInFirestore from './firebase/searchId';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    if (req.method === 'POST') {
      console.log('POST request');
      const { message, user } = req.body;
      const userId = await searchIdInFirestore(user);
      const groupId = 'lEOwKBs6iL4m1NNXpK4l';
      messageToFirestore(userId, groupId, message);
      res.status(200).json({ message: 'message is send' });
    }
  } catch (error) {
    console.error(error);
  }
}
