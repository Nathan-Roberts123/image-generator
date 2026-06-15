import { getServerSession } from "next-auth/next";
import { authOptions } from "@/authOptions";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  return NextResponse.json({ userId: session?.user.id });
}
