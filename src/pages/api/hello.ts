// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const testEnv = process.env.NEXT_PUBLIC_TESTS;

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
