import Head from "next/head";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

export default function Home() {
  return <h1>Holaa</h1>;
}

export const getServerSideProps = async () => {}