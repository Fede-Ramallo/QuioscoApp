import { categorias } from "./data/categorias.js";
import { productos } from "./data/productos";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  try {
    await prisma.categoria.createMany({
      data: categorias,
    });
    await prisma.producto.createMany({
      data: productos,
    });
  } catch (err) {
    console.log(err);
  }
};

main();