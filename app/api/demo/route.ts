import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { demoRequestSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { sendDemoConfirmation, sendDemoNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const limited = await rateLimit(request);
    if (!limited.success) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = demoRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 422 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { website: _honeypot, ...data } = parsed.data;
    void _honeypot;

    await prisma.demoRequest.create({
      data: {
        ...data,
        ipAddress: request.headers.get("x-forwarded-for") || undefined,
        userAgent: request.headers.get("user-agent") || undefined,
      },
    });

    await Promise.allSettled([
      sendDemoNotification(data),
      sendDemoConfirmation(data.firstName, data.email),
    ]);

    return NextResponse.json({
      success: true,
      message: "We'll be in touch within one business day.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please email us directly." },
      { status: 500 }
    );
  }
}
