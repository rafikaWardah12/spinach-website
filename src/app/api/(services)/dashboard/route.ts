import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const datas = await prisma.data.findMany({
      where: { published: true },
      orderBy: { timeStamp: "desc" },
    });
    return Response.json(datas);
  } catch (error) {
    return Response.json({ error: "Failed to catch data" }, { status: 500 });
  }
}
