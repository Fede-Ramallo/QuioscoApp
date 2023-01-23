// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function handler(
  req,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
