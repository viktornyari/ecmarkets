import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW = 60;
const RATE_LIMIT_MAX = 5;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const rateKey = `rate:subscribe:${ip}`;
    const attempts = await kv.incr(rateKey);
    if (attempts === 1) {
      await kv.expire(rateKey, RATE_LIMIT_WINDOW);
    }
    if (attempts > RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const existing = await kv.zscore("subscribers", email);
    if (existing !== null) {
      return NextResponse.json({ success: true, message: "Already subscribed." });
    }

    await kv.zadd("subscribers", { score: Date.now(), member: email });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[subscribe] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
