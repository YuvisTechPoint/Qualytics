import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { contactSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const limited = await rateLimit(request);
    if (!limited.success) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Validation failed" }, { status: 422 });
    }
    if (parsed.data.website) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { website: _honeypot, ...data } = parsed.data;
    void _honeypot;

    await prisma.contactMessage.create({
      data: {
        ...data,
        ipAddress: request.headers.get("x-forwarded-for") || undefined,
      },
    });

    await sendContactNotification(data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
