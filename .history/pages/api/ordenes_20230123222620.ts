import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const orden = await prisma.orden.create({ data: })
    res.json({ metodo: "post" });

    console.log(req.body);
  }
}
