import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const { id } = req.query;

    const ordenActualizada = async prisma.orden
    console.log("Actualizando");
  }
  res.status(200).json();
}
