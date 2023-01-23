// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function handler(req, res) {
  const categorias = prisma.categoria.findMany();
  res.status(200).json(categorias);
}
