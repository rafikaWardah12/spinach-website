import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  // console.log(await req.json());
  const { suhu, kelembapan, cahaya, phTanah, published, timeStamp } = await req.json();
  try {
    const newData = await prisma.data.create({
      data: { suhu, kelembapan, cahaya, phTanah, published, timeStamp },
    });
   return Response.json(newData);
  } catch (error) {
    return Response.json({ error: error }, {status: 500});
  }
}


