import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    res.json({ metodo: "post" });

    console.log(req.body);
  }
}
