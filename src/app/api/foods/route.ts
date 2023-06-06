import type { NextRequest } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req: NextRequest) {
  try {
    const foods = await prisma.food.findMany();

    return new Response(JSON.stringify(foods));
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong :(");
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, kcal, grams, image } = await req.json();

    const food = await prisma.food.create({
      data: { name, kcal, grams, image },
    });

    return new Response(JSON.stringify(food));
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong :(");
  }
}
