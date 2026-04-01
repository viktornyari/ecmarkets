import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const secret = request.headers.get("x-admin-secret");

  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const subscribers = await kv.zrange("subscribers", 0, -1, { withScores: true });

    const list: { email: string; subscribedAt: string }[] = [];
    for (let i = 0; i < subscribers.length; i += 2) {
      list.push({
        email: subscribers[i] as string,
        subscribedAt: new Date(subscribers[i + 1] as number).toISOString(),
      });
    }

    return NextResponse.json({ count: list.length, subscribers: list });
  } catch (error) {
    console.error("[subscribers] Error:", error);
    return NextResponse.json({ error: "Failed to fetch subscribers." }, { status: 500 });
  }
}
