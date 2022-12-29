import type { NextApiRequest, NextApiResponse } from 'next';
import messageToFirestore from './firebase/messageCollection';
import searchIdInFirestore from './firebase/searchId';
import getUserFromFirestore from './services/getUser';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    if (req.method === 'GET') {
      const user = 'Jose Alonso Paredes Marin';
      const responseUser = await getUserFromFirestore(user);
      res.status(200).json(responseUser);
    }
  } catch (error) {
    console.error(error);
  }
}
