import type { NextApiRequest, NextApiResponse } from 'next';
import createdGroupToFirestore from './firebase/createGroup';
import messageToFirestore from './firebase/messageCollection';
import searchIdInFirestore from './firebase/searchId';
import getGroupsForFirestore from './services/getGroups';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    if (req.method === 'POST') {
      const data = {
        user: 'Alonso Paredes',
        members: ['Alonso Paredes', 'Jose Alonso Paredes Marin'],
        groupName: 'laPepeOlla',
        groupType: 1,
      };
      createdGroupToFirestore(data);
      res.status(200).json({ message: 'Group created successfully' });
    } else if (req.method === 'GET') {
      const groups = await getGroupsForFirestore('Alonso Paredes');
      res.status(200).json(groups);
    }
  } catch (error) {
    console.error(error);
  }
}
