import { Timestamp } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    try {
      const timeObj = Timestamp.now();
      console.log(timeObj instanceof Timestamp);
      console.log(typeof timeObj);
      console.log(timeObj.toDate().toLocaleTimeString());
      res.status(200).json({ message: 'holi' });
    } catch (err) {
      console.log(err);
    }
  }
}
