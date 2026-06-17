import { render } from "@react-email/components";
import { Resend } from "resend";
import { DemoRequestNotification } from "@/emails/DemoRequestNotification";
import { DemoRequestConfirmation } from "@/emails/DemoRequestConfirmation";
import { NewsletterWelcome } from "@/emails/NewsletterWelcome";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM = process.env.EMAIL_FROM || "Qualytics <hello@qualytics.ai>";
const NOTIFY = process.env.EMAIL_NOTIFY || "hello@qualytics.ai";

async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  if (!resend) {
    console.log("[email stub]", { to, subject });
    return { id: "stub" };
  }
  return resend.emails.send({ from: FROM, to, subject, html });
}

export async function sendDemoNotification(lead: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  challenge?: string | null;
}) {
  const html = await render(DemoRequestNotification(lead));
  return sendEmail({
    to: NOTIFY,
    subject: `New Demo Request — ${lead.firstName} ${lead.lastName}`,
    html,
  });
}

export async function sendDemoConfirmation(firstName: string, email: string) {
  const html = await render(DemoRequestConfirmation({ firstName }));
  return sendEmail({
    to: email,
    subject: "Thanks for requesting a Qualytics demo",
    html,
  });
}

export async function sendNewsletterWelcome(email: string) {
  const html = await render(NewsletterWelcome({ email }));
  return sendEmail({
    to: email,
    subject: "Welcome to Qualytics insights",
    html,
  });
}

export async function sendContactNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) {
  return sendEmail({
    to: NOTIFY,
    subject: `Contact from ${data.firstName} ${data.lastName}`,
    html: `<p><strong>Email:</strong> ${data.email}</p><p>${data.message}</p>`,
  });
}

export async function sendTrialConfirmation(name: string, email: string) {
  return sendEmail({
    to: email,
    subject: "Your Qualytics free trial",
    html: `<p>Hi ${name}, your free trial request has been received. We'll send access details shortly.</p>`,
  });
}
