import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { trialRequestSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { sendTrialConfirmation } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const limited = await rateLimit(request);
    if (!limited.success) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = trialRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Validation failed" }, { status: 422 });
    }
    if (parsed.data.website) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { website: _honeypot, ...data } = parsed.data;
    void _honeypot;

    await prisma.trialRequest.create({ data });
    await sendTrialConfirmation(data.name, data.email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
