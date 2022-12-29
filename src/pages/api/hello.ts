// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import config from './config';

const testEnv = config.holi;

type Data = {
  name: string;
  env: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: 'John Doe', env: testEnv });
}
